webpackJsonp([1],{"3ojL":function(t,e,n){t.exports=n.p+"static/img/afterbg.8816c10.jpg"},"3wY5":function(t,e){},"5OHe":function(t,e){},"7vNt":function(t,e){},AAfR:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("MVMM"),s={baseUrl:"http://www.dadiandesign.com",bus:new i.default},a={props:{nickname:{type:String,required:!0},isHistory:{type:Boolean,required:!0},openId:{type:String,required:!0}},data:function(){return{}},mounted:function(){},methods:{handleHistoryClick:function(){this.$emit("rightClick",!0),this.$router.push("/history/"+this.openId)},handleGoback:function(){this.$router.go(-1),this.$emit("rightClick",!1)}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-container"},[n("div",{staticClass:"nickname"},[n("span",{staticClass:"point"}),t._v(" "),n("span",[t._v(t._s(t.nickname))])]),t._v(" "),t.isHistory?n("span",{staticClass:"historyTitle"},[t._v("历史竞猜")]):t._e(),t._v(" "),t.isHistory?n("div",{staticClass:"goback",on:{click:t.handleGoback}},[n("span",[t._v("<  返回")])]):n("div",{staticClass:"history",on:{click:t.handleHistoryClick}},[n("span",{staticClass:"point"}),t._v(" "),n("span",[t._v("我的竞猜")])])])},staticRenderFns:[]};var r=n("vSla")(a,o,!1,function(t){n("7vNt")},"data-v-6ae59b58",null).exports,c=n("aozt"),u=n.n(c),d=n("wSez"),l=n.n(d),h={name:"App",data:function(){return{code:"",nickname:"",openId:"",headimgurl:"",isHistory:!1,show:!1}},components:{Header:r,MessageBox:d.MessageBox},created:function(){},mounted:function(){var t=this;this.code=this.$route.query.code,u.a.get(s.baseUrl+"/request",{params:{code:this.code}}).then(function(e){e.data.errcode&&d.MessageBox.alert("页面授权已过期，请重新进入").then(function(t){window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd55316e683616eda&redirect_uri=http://www.dadiandesign.com/activity&response_type=code&scope=snsapi_userinfo&state=state123#wechat_redirect"}),t.nickname=e.data.nickname,t.openId=e.data.openid,t.headimgurl=e.data.headimgurl}).catch(function(t){console.log(t)})},methods:{handRightClick:function(t){this.isHistory=t}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{nickname:t.nickname,openId:t.openId,isHistory:t.isHistory},on:{rightClick:t.handRightClick}}),t._v(" "),n("router-view",{staticClass:"animated",attrs:{nickname:t.nickname,openId:t.openId,headimgurl:t.headimgurl}})],1)},staticRenderFns:[]};var f=n("vSla")(h,p,!1,function(t){n("vJiV")},null,null).exports,m=n("zO6J"),v={props:{nickname:{type:String},openId:{type:String}},data:function(){return{qList:["1、明显是一只法牛啊。","2、应该是一只柯基啦。","3、绝对是一只贵宾犬。","4、以上答案都不正确。"],qId:"谁是LULU?",answerIndex:null,answer:""}},components:{Button:d.Button,MessageBox:d.MessageBox},computed:{},created:function(){console.log(this.nickname,this.openId)},mounted:function(){},methods:{handleClick:function(t,e){alert(t),this.answerIndex=t,this.answer=e.split("、")[1]},handleSubmit:function(){var t=this;if(null!==this.answerIndex){var e=s.baseUrl+"/user_answer";u.a.get(e,{params:{qId:this.qId,answer:this.answer,openId:this.openId,nickname:this.nickname}}).then(function(e){0===e.data.status?d.MessageBox.alert("您已经提交过答案").then(function(e){t.$router.push("/after")}):d.MessageBox.alert(e.data.message).then(function(e){t.$router.push("/after")})}).catch(function(t){console.log(t)})}else d.MessageBox.alert("请选择答案后提交!")}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"before-container"},[n("div",{staticClass:"mainbox"},[t._l(t.qList,function(e,i){return n("div",{key:i,staticClass:"button-container",on:{click:function(n){t.handleClick(i,e)}}},[n("button",{class:{actived:i===t.answerIndex}},[t._v("\n                "+t._s(e)+"\n                "),i===t.answerIndex?n("span"):t._e()])])}),t._v(" "),n("button",{staticClass:"submit",on:{click:t.handleSubmit}},[t._v("\n            提交\n        ")])],2)])},staticRenderFns:[]};var g=n("vSla")(v,_,!1,function(t){n("b8oW"),n("zLyV")},"data-v-2c80eaaf",null).exports,y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"after-container"},[e("img",{attrs:{src:n("3ojL"),alt:""}})])}]};var k=n("vSla")({data:function(){return{}},created:function(){}},y,!1,function(t){n("eluS")},"data-v-a89958e6",null).exports,w={props:{headimgurl:{type:String}},data:function(){return{openId:"",historyList:[]}},created:function(){s.bus.$emit("history",!0)},mounted:function(){this.openId=this.$route.params.openId,this.requestHistory()},beforeDestroy:function(){s.bus.$emit("history",!1)},methods:{requestHistory:function(){var t=this,e=s.baseUrl+"/user_history";u.a.get(e,{params:{openId:this.openId}}).then(function(e){t.historyList=e.data.history}).catch(function(t){console.log(t)})}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},t._l(t.historyList,function(e){return n("div",{key:e.ansTime,staticClass:"history"},[n("div",{staticClass:"left"},[n("img",{attrs:{src:t.headimgurl,alt:"touxiang"}})]),t._v(" "),n("div",{staticClass:"right"},[n("li",[n("span",{staticClass:"hisTitle"},[t._v("答题时间：  ")]),t._v(t._s(e.ansTime))]),t._v(" "),n("li",[n("span",{staticClass:"hisTitle"},[t._v("已答题目：")]),t._v(" "+t._s(e.qId))]),t._v(" "),n("li",[n("span",{staticClass:"hisTitle"},[t._v("所选答案：")]),t._v(" "+t._s(e.ans))])])])}))},staticRenderFns:[]};var I=n("vSla")(w,C,!1,function(t){n("AAfR")},"data-v-1ed4f37e",null).exports;i.default.use(m.a);var b=new m.a({routes:[{path:"/",name:"Before",component:g},{path:"/after",name:"After",component:k},{path:"/history/:openId",name:"ComHistory",component:I}]}),x=(n("5OHe"),n("D0oh"),n("3wY5")),H=n.n(x);i.default.use(l.a),i.default.use(H.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:b,components:{App:f},template:"<App/>"})},b8oW:function(t,e){},eluS:function(t,e){},vJiV:function(t,e){},zLyV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c4eaee3620237a242010.js.map