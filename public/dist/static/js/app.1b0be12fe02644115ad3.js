webpackJsonp([1],{"3ojL":function(t,e,n){t.exports=n.p+"static/img/afterbg.8816c10.jpg"},IwFi:function(t,e){},Lom6:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("MVMM"),s={baseUrl:"http://www.dadiandesign.com",bus:new i.default},a={props:{nickname:{type:String,required:!0},isHistory:{type:Boolean,required:!0},openId:{type:String,required:!0}},data:function(){return{}},mounted:function(){},methods:{handleHistoryClick:function(){this.$emit("rightClick",!0),this.$router.push("/history/"+this.openId)},handleGoback:function(){this.$router.go(-1),this.$emit("rightClick",!1)}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-container"},[t.isHistory?t._e():n("div",{staticClass:"nickname"},[n("span",{staticClass:"point"}),t._v(" "),n("span",[t._v(t._s(t.nickname))])]),t._v(" "),t.isHistory?n("span",{staticClass:"historyTitle"},[t._v("历史竞猜")]):t._e(),t._v(" "),t.isHistory?n("div",{staticClass:"goback",on:{click:t.handleGoback}},[n("span",[t._v("<  返回")])]):n("div",{staticClass:"history",on:{click:t.handleHistoryClick}},[n("span",{staticClass:"point"}),t._v(" "),n("span",[t._v("我的竞猜")])])])},staticRenderFns:[]};var r=n("vSla")(a,o,!1,function(t){n("TNNa")},"data-v-67395c92",null).exports,c=n("aozt"),l=n.n(c),d=n("wSez"),u={name:"App",data:function(){return{code:"",nickname:"",openId:"",headimgurl:"",isHistory:!1,show:!1}},components:{Header:r,MessageBox:d.MessageBox},created:function(){this.onBusHistroy()},mounted:function(){var t=this;this.code=this.$route.query.code,l.a.get(s.baseUrl+"/request",{params:{code:this.code}}).then(function(e){e.data.errcode&&d.MessageBox.alert("页面授权已过期，请重新进入").then(function(t){window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd55316e683616eda&redirect_uri=http://www.dadiandesign.com/activity&response_type=code&scope=snsapi_userinfo&state=state123#wechat_redirect"}),t.nickname=e.data.nickname,t.openId=e.data.openid,t.headimgurl=e.data.headimgurl}).catch(function(t){console.log(t)})},methods:{handRightClick:function(t){this.isHistory=t},onBusHistroy:function(){var t=this;s.bus.$on("history",function(e){t.isHistory=e})}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{nickname:t.nickname,openId:t.openId,isHistory:t.isHistory},on:{rightClick:t.handRightClick}}),t._v(" "),n("router-view",{staticClass:"animated",attrs:{nickname:t.nickname,openId:t.openId,headimgurl:t.headimgurl}})],1)},staticRenderFns:[]};var p=n("vSla")(u,h,!1,function(t){n("qS27")},null,null).exports,f=n("zO6J"),m={props:{nickname:{type:String},openId:{type:String}},data:function(){return{qList:["1、明显是一只法牛啊。","2、应该是一只柯基啦。","3、绝对是一只贵宾犬。","4、以上答案都不正确。"],qId:"谁是LULU?",answerIndex:null,answer:"",alertFlag:!1,alertcontent:"这是提示信息方式范德萨范德萨发",switchType:1}},components:{},computed:{},created:function(){s.bus.$emit("history",!1)},mounted:function(){console.log(this.nickname,this.openId)},methods:{handleClick:function(t,e){this.answerIndex=t,this.answer=e.split("、")[1]},handleSubmit:function(){var t=this;if(null!==this.answerIndex){var e=s.baseUrl+"/user_answer";l.a.get(e,{params:{qId:this.qId,answer:this.answer,openId:this.openId,nickname:this.nickname}}).then(function(e){0===e.data.status?t.alertViewShow("您已经提交过答案"):t.alertViewShow(e.data.message)}).catch(function(t){console.log(t)})}else this.alertViewShow("请选择答案后提交!",0)},handleAlertviewClick:function(){this.alertFlag=!1,this.switchType&&this.$router.push("/after")},alertViewShow:function(t,e){arguments.length>1?this.switchType=e:this.switchType=1,this.alertcontent=t,this.alertFlag=!0}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"before-container"},[t.alertFlag?n("div",{staticClass:"alertview"},[n("div",{staticClass:"title"},[t._v("\n            提示\n        ")]),t._v(" "),n("div",{staticClass:"content"},[t._v(t._s(t.alertcontent))]),t._v(" "),n("button",{staticClass:"confirm",on:{click:t.handleAlertviewClick}},[t._v("确定")])]):t._e(),t._v(" "),n("div",{staticClass:"mainbox"},[t._l(t.qList,function(e,i){return n("div",{key:i,staticClass:"button-container",on:{click:function(n){t.handleClick(i,e)}}},[n("button",{class:{actived:i===t.answerIndex}},[t._v("\n                "+t._s(e)+"\n                "),i===t.answerIndex?n("span"):t._e()])])}),t._v(" "),n("button",{staticClass:"submit",on:{click:t.handleSubmit}},[t._v("\n            提交\n        ")])],2)])},staticRenderFns:[]};var _=n("vSla")(m,v,!1,function(t){n("w3Pn"),n("Lom6")},"data-v-87a01904",null).exports,w={data:function(){return{}},created:function(){s.bus.$emit("history",!1)}},y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"after-container"},[e("img",{attrs:{src:n("3ojL"),alt:""}})])}]};var g=n("vSla")(w,y,!1,function(t){n("hDIw")},"data-v-fb388768",null).exports,k={props:{headimgurl:{type:String}},data:function(){return{openId:"",historyList:[]}},created:function(){s.bus.$emit("history",!0)},mounted:function(){this.openId=this.$route.params.openId,this.requestHistory()},beforeDestroy:function(){s.bus.$emit("history",!1)},methods:{requestHistory:function(){var t=this,e=s.baseUrl+"/user_history";l.a.get(e,{params:{openId:this.openId}}).then(function(e){t.historyList=e.data.history}).catch(function(t){console.log(t)})}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},t._l(t.historyList,function(e){return n("div",{key:e.ansTime,staticClass:"history"},[n("div",{staticClass:"left"},[n("img",{attrs:{src:t.headimgurl,alt:"touxiang"}})]),t._v(" "),n("div",{staticClass:"right"},[n("li",[n("span",{staticClass:"hisTitle"},[t._v("答题时间：  ")]),t._v(t._s(e.ansTime))]),t._v(" "),n("li",[n("span",{staticClass:"hisTitle"},[t._v("已答题目：")]),t._v(" "+t._s(e.qId))]),t._v(" "),n("li",[n("span",{staticClass:"hisTitle"},[t._v("所选答案：")]),t._v(" "+t._s(e.ans))])])])}))},staticRenderFns:[]};var I=n("vSla")(k,C,!1,function(t){n("IwFi")},"data-v-82e545c0",null).exports;i.default.use(f.a);var b=new f.a({routes:[{path:"/",name:"Before",component:_},{path:"/after",name:"After",component:g},{path:"/history/:openId",name:"ComHistory",component:I}]});n("D0oh");i.default.config.productionTip=!1,new i.default({el:"#app",router:b,components:{App:p},template:"<App/>"})},TNNa:function(t,e){},hDIw:function(t,e){},qS27:function(t,e){},w3Pn:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1b0be12fe02644115ad3.js.map