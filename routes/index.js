var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var request = require('request');

var APPID = 'wxd55316e683616eda'
var APPSECRET = '8410acf63ac99272f3f841469dc94afc'
var CODE = ''

/* GET home page. */
router.get('/', function(req, res, next) {

    CODE = req.query.code
    var filePath = '../public/dist/index.html'
    var realPath = path.join(__dirname, filePath)
    console.log(filePath)
    res.sendFile( realPath )

});

router.get('/static/*', function(req, res, next) {

    var filePath = '../public/dist/static/'+req.params[0]
    var realPath = path.join(__dirname, filePath)
    console.log(filePath)
    res.sendFile( realPath )

});

router.get('/request', function(req, res, next){
    /**
     * 根据code请求access_token的接口地址
     * 请求方式get
     */
    // var access = req.session.accessToken
    // var openid = req.session.openId

    // console.log("your session is "+ access)

    // var yanzheng = 'https://api.weixin.qq.com/sns/auth?access_token='+access+'&openid='+openid
    // request(yanzheng, function(error, response, body){
    //     if (!error && response.statusCode == 200) {
    //         body = JSON.parse(body)
    //         if(body.errcode ===0 && body.errmsg ==='ok'){
    //             var userInfoUrl = 'https://api.weixin.qq.com/sns/userinfo?access_token='+access+'&openid='+openid+'&lang=zh_CN'
    //             request(userInfoUrl, function(error, response, body){
    //                 if (!error && response.statusCode == 200) {
    //                     body = JSON.parse(body)
    //                     res.send(body)
    //                 }
    //             })
    //             return
    //         }else{
    //     console.log(req.query.code)
                var url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid='+APPID+'&secret='+APPSECRET+'&code='+req.query.code+'&grant_type=authorization_code'
                //根据code、appid、appsecret请求微信接口,获取用户数据
                request(url, function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        console.log(req.query.code)
                        body = JSON.parse(body)
                        //这里保存refresh_token
                        var access_token = body.access_token
                        var refresh_token = body.refresh_token
                        var openid = body.openid
                        req.session.accessToken = access_token;
                        req.session.openId = openid;

                        //拉取用户信息(需scope为 snsapi_userinfo)
                        /**
                         * 请求方法
                         * http：GET（请使用https协议） https://api.weixin.qq.com/sns/userinfo?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN
                         */
                        var userInfoUrl = 'https://api.weixin.qq.com/sns/userinfo?access_token='+access_token+'&openid='+openid+'&lang=zh_CN'
                        request(userInfoUrl, function(error, response, body){
                            if (!error && response.statusCode == 200) {
                                body = JSON.parse(body)
                                console.log(body)
                                res.send(body)
                            }
                        })
                    }else{
                        console.log('发生未知错误')
                    }
                })
    //         }
    //     }
    // })


})

router.get('/user_answer', function(req, res, next){
    /**
     * query结构
     * {
     *  nickname:
     *  openId:
     *  qId:
     *  answer:
     * }
     */
    //接收到用户请求，查询用户是否存在
    var mysql = require('mysql');
    var connection = mysql.createConnection({
      host     : 'qdm130083629.my3w.com',  //121.42.100.211
      port: 3306,
      user     : 'qdm130083629',
      password : 'yang1996',
      database : 'qdm130083629_db',
      insecureAuth: true
    });

    connection.connect();
    var sql = 'SELECT * FROM user where openId='+'"'+req.query.openId+'"'
    connection.query(sql, function(err, result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }
        console.log('--------------------------SELECT----------------------------');
        //当没有该用户时添加用户
        if(result.length === 0){
            var  addSql = 'INSERT INTO user(id,nickname,openId,history) VALUES(0,?,?,?)';
            var history = []
            history.push({
                qId: req.query.qId,
                ans: req.query.answer,
                ansTime: new Date().toLocaleString()
            })
            var  addSqlParams = [req.query.nickname,req.query.openId,JSON.stringify(history)];
            //增 向数据库中插入数据
            connection.query(addSql,addSqlParams,function (err, result) {
                if(err){
                    console.log('[INSERT ERROR] - ',err.message);
                    return;
                }
                console.log('--------------------------INSERT----------------------------');
                res.send({
                    ret: true,
                    status: 1,
                    message: '提交成功！'
                })
                connection.end();
                return
            });
        }else{
            var willUpdate = true
            //已经有该用户了，查看用户是否已经答题过
            var history = JSON.parse(result[0].history)
            history.map(function(item,index) {
                //已经答过该题，提示不要重复答题
                if(req.query.qId === item.qId){
                    // console.log(req.query.qId)
                    // console.log(item.qId)
                    res.json({
                        ret: true,
                        status: 0,
                        message: '您已经提交过该题!'
                    })
                    willUpdate = false
                }
            })
            if(willUpdate){
                history.push({
                    qId: req.query.qId,
                    ans: req.query.answer,
                    ansTime: new Date().toLocaleString()
                })
                //没答过该题
                var modSql = 'UPDATE user SET history = ? WHERE openId='+'"'+req.query.openId+'"';
                var modSqlParams = [JSON.stringify(history)];

                //改
                connection.query(modSql,modSqlParams,function (err, result) {
                    if(err){
                        console.log('[UPDATE ERROR] - ',err.message);
                        return;
                    }
                    console.log('--------------------------UPDATE----------------------------');
                    res.json({
                        ret: true,
                        status: 1,
                        message: '答题成功！'
                    })
                    console.log('-----------------------------------------------------------------\n\n');
                });

            }
            connection.end();
        }

    });


})

router.get('/user_history', function(req, res){
    var openId = req.query.openId
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
      host     : 'qdm130083629.my3w.com',  //121.42.100.211
      port: 3306,
      user     : 'qdm130083629',
      password : 'yang1996',
      database : 'qdm130083629_db',
      insecureAuth: true
    });

    connection.connect();

    console.log(req.query)
    var sql = 'SELECT * FROM user where openId='+'"'+req.query.openId+'"'
    //查
    connection.query(sql,function (err, result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }

        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        var nickname = result[0].nickname
        var history = JSON.parse(result[0].history)
        res.json({
            nickname: nickname,
            history: history
        })

        console.log('------------------------------------------------------------\n\n');
    });

    connection.end();
})

module.exports = router;






// router.get('/api/login', function(req, res, next) {
//     console.log("接收到请求"+ req.query.phoneNumber);
//     var username = req.query.phoneNumber;
//     req.session.username = username;

//     var data = {
//       ret: true,
//       username
//     }
//     res.send(data);

// });


// router.get('/api/isLogin', function(req, res, next) {
//     console.log(req.session);
//     if(req.session.username) {
//      res.json({
//        success : true,
//        username : req.session.username+"已登录"
//      })
//     }else{
//       res.send("请登录");

//     }
// });

//当有access_token的时候查看access_token是否过期
    // if(access_token !== '' && openid !== ''){
    //     var validateUrl = 'https://api.weixin.qq.com/sns/auth?access_token='+access_token+'&openid='+openid
    //     request(validateUrl, function(error, response, body){
    //         if(!error && response.statusCode == 200){
    //             body = JSON.parse(body)
    //             if(body.errcode != 0){
    //                 //使用refresh_token 刷新access_token
    //                 var refreshUrl = 'https://api.weixin.qq.com/sns/oauth2/refresh_token?appid='+APPID+'&grant_type=refresh_token&refresh_token='+refresh_token
    //                 request(refreshUrl, function(error, response, body){
    //                     if(!error && response.statusCode == 200){
    //                         body = JSON.parse(body)
    //                         access_token = body.access_token
    //                         openid = body.openid

    //                         console.log(body)

    //                         //拉取用户信息(需scope为 snsapi_userinfo)
    //                         /**
    //                          * 请求方法
    //                          * http：GET（请使用https协议） https://api.weixin.qq.com/sns/userinfo?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN
    //                          */
    //                         var userInfoUrl = 'https://api.weixin.qq.com/sns/userinfo?access_token='+access_token+'&openid='+openid+'&lang=zh_CN'
    //                         request(userInfoUrl, function(error, response, body){
    //                             if (!error && response.statusCode == 200) {
    //                                 /**
    //                                  * body正确返回的格式
    //                                  * {
    //                                  *  "openid":" OPENID",
    //                                     "nickname": NICKNAME,
    //                                     "sex":"1",
    //                                     "province":"PROVINCE"
    //                                     "city":"CITY",
    //                                     "country":"COUNTRY",
    //                                     "headimgurl":    "http://thirdwx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/46",
    //                                     "privilege":[ "PRIVILEGE1" "PRIVILEGE2"     ],
    //                                     "unionid": "o6_bmasdasdsad6_2sgVt7hMZOPfL"
    //                                     }
    //                                 */
    //                                 body = JSON.parse(body)
    //                                 res.send(body)
    //                             }
    //                         })
    //                     }
    //                 })
    //             }
    //         }
    //     })
    // }else{
