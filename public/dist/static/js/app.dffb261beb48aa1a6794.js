webpackJsonp([1],{"3ojL":function(t,e,n){t.exports=n.p+"static/img/afterbg.8816c10.jpg"},"58kj":function(t,e){},"5OHe":function(t,e){},Amc0:function(t,e){},COqg:function(t,e){},CW1X:function(t,e){},NAho:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("MVMM"),i={baseUrl:"http://www.dadiandesign.com",bus:new s.default},a={props:{nickname:{type:String,required:!0},isHistory:{type:Boolean,required:!0},openId:{type:String,required:!0}},data:function(){return{}},mounted:function(){},methods:{handleHistoryClick:function(){this.$emit("rightClick",!0),this.$router.push("/history/"+this.openId)},handleGoback:function(){this.$router.go(-1),this.$emit("rightClick",!1)}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-container"},[t.isHistory?t._e():n("div",{staticClass:"nickname"},[n("span",{staticClass:"point"}),t._v(" "),n("span",[t._v(t._s(t.nickname))])]),t._v(" "),t.isHistory?n("span",{staticClass:"historyTitle"},[t._v("历史竞猜")]):t._e(),t._v(" "),t.isHistory?n("div",{staticClass:"goback",on:{click:t.handleGoback}},[n("span",[t._v("< 返回")])]):n("div",{staticClass:"history",on:{click:t.handleHistoryClick}},[n("span",{staticClass:"point"}),t._v(" "),n("span",[t._v("我的竞猜")])])])},staticRenderFns:[]};var o=n("vSla")(a,r,!1,function(t){n("CW1X")},"data-v-2ead16ed",null).exports,c=n("aozt"),u=n.n(c),l={props:{arg:{type:Object,required:!0}},data:function(){return{}},mounted:function(){},methods:{handleAlertviewClick:function(){this.$emit("stateChange",!1),void 0!==this.arg.callback&&this.arg.callback()}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.arg.alertFlag?n("div",{staticClass:"alertview"},[n("div",{staticClass:"title"},[t._v("\n        提示\n    ")]),t._v(" "),n("div",{staticClass:"content"},[t._v(t._s(t.arg.alertcontent))]),t._v(" "),n("button",{staticClass:"confirm",on:{click:t.handleAlertviewClick}},[t._v("确定")])]):t._e()},staticRenderFns:[]};var h=n("vSla")(l,d,!1,function(t){n("COqg")},"data-v-6aef2e90",null).exports,p=n("wSez"),m=n.n(p),f={name:"App",data:function(){return{code:"",nickname:"",openId:"",headimgurl:"",isHistory:!1,show:!1,arg:{alertFlag:!1,alertcontent:""},prompt:!0}},components:{Header:o,AlertView:h,Button:p.Button},created:function(){this.onBusHistroy()},mounted:function(){var t=this;this.code=this.$route.query.code,u.a.get(i.baseUrl+"/request",{params:{code:this.code}}).then(function(e){e.data.errcode||2e3===e.data.status?t.formateArguments({alertFlag:!0,alertcontent:"页面授权已过期，请重新进入",callback:function(){window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd55316e683616eda&redirect_uri=http://www.dadiandesign.com/activity&response_type=code&scope=snsapi_userinfo&state=state123#wechat_redirect"}}):(t.nickname=e.data.nickname,t.openId=e.data.openid,"ogwi20fMDnqfdocFdYwjbI5wW2Fc"===t.openId&&(t.prompt=!0),"ogwi20c-PvX-LvcCq9JlM2F1Cc9Y"===e.data.openid&&(t.prompt=!0),t.headimgurl=e.data.headimgurl)}).catch(function(t){console.log(t)})},methods:{handRightClick:function(t){this.isHistory=t},onBusHistroy:function(){var t=this;i.bus.$on("history",function(e){t.isHistory=e})},formateArguments:function(t){this.arg=Object.assign(this.arg,t)},handleStateChange:function(t){this.arg.alertFlag=t},handleConfirm:function(){this.prompt=!1,this.$router.push("/control")},handleCancel:function(){this.prompt=!1}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("AlertView",{attrs:{arg:t.arg},on:{stateChange:t.handleStateChange}}),t._v(" "),n("Header",{attrs:{nickname:t.nickname,openId:t.openId,isHistory:t.isHistory},on:{rightClick:t.handRightClick}}),t._v(" "),n("router-view",{staticClass:"animated",attrs:{nickname:t.nickname,openId:t.openId,headimgurl:t.headimgurl}}),t._v(" "),t.prompt?n("div",{staticClass:"prompt"},[n("div",{staticClass:"controlTitle"},[t._v("\n            请问是否现在去设置标题和题目？\n        ")]),t._v(" "),n("Button",{staticClass:"promptButton",attrs:{type:"danger"},on:{click:t.handleConfirm}},[t._v("\n            确认\n        ")]),t._v(" "),n("Button",{staticClass:"promptButton",attrs:{type:"default"},on:{click:t.handleCancel}},[t._v("\n            取消\n        ")])],1):t._e()],1)},staticRenderFns:[]};var g=n("vSla")(f,v,!1,function(t){n("d37e")},null,null).exports,_=n("zO6J"),C={props:{nickname:{type:String,required:!0},openId:{type:String,required:!0}},data:function(){return{qList:[],qId:"谁是LULU?",answerIndex:null,answer:[],current:"",arg:{alertFlag:!1,alertcontent:""}}},components:{AlertView:h,Button:p.Button},computed:{buttonContent:function(){return this.answer.length<2?"下一题":"提交"},backgroundStyle:function(){return this.answer.length<3?"before"+this.answer.length:"berore2"}},created:function(){i.bus.$emit("history",!1),this.getQuesList()},mounted:function(){console.log(this.nickname,this.openId),console.log()},methods:{handleClick:function(t,e){this.answerIndex=t,this.current=e.split("、")[1]},toNext:function(){var t=this;if(null!==this.answerIndex){if(this.answer.length<2)return this.answer.push(this.current),void(this.answerIndex=null);if(this.answer.push(this.current),""!==this.nickname&&void 0!==this.nickname&&""!==this.openId&&void 0!==this.openId){var e=i.baseUrl+"/user_answer";u.a.get(e,{params:{qId:this.qId,answer:this.answer,openId:this.openId,nickname:this.nickname}}).then(function(e){1e3===e.data.status&&t.formateArguments({alertFlag:!0,alertcontent:e.data.message}),0===e.data.status?t.formateArguments({alertFlag:!0,alertcontent:"您已经提交过答案!",callback:function(){t.$router.push("/after")}}):t.formateArguments({alertFlag:!0,alertcontent:e.data.message,callback:function(){t.$router.push("/after")}})}).catch(function(t){console.log(t)})}else this.formateArguments({alertFlag:!0,alertcontent:"页面正在加载请稍后再提交!",callback:function(){window.location.reload()}})}else this.formateArguments({alertFlag:!0,alertcontent:"请选择答案后提交!"})},formateArguments:function(t){this.arg=Object.assign(this.arg,t)},handleStateChange:function(t){this.arg.alertFlag=t},getQuesList:function(){var t=this,e=i.baseUrl+"/queslist";u.a.get(e).then(function(e){t.qId=e.data.quetitle,document.getElementsByTagName("title")[0].innerHTML=t.qId,t.qList=e.data.queslist.map(function(t){return JSON.parse(t).map(function(t,e){return e+1+"、"+t})}),console.log(e.data.queslist)}).catch(function(t){console.log(t)})}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"before-container",class:t.backgroundStyle},[n("AlertView",{attrs:{arg:t.arg},on:{stateChange:t.handleStateChange}}),t._v(" "),n("div",{staticClass:"mainbox"},[n("div",{staticClass:"button-group"},t._l(t.qList[t.answer.length],function(e,s){return n("div",{key:s,staticClass:"button-container"},[n("Button",{class:{actived:s===t.answerIndex},on:{click:function(n){t.handleClick(s,e)}}},[t._v("\n                    "+t._s(e)+"\n                    "),s===t.answerIndex?n("span"):t._e()])],1)})),t._v(" "),n("Button",{staticClass:"submit",on:{click:t.toNext}},[t._v("\n            "+t._s(t.buttonContent)+"\n        ")])],1)],1)},staticRenderFns:[]};var k=n("vSla")(C,y,!1,function(t){n("NAho"),n("pslH")},"data-v-44910283",null).exports,w={data:function(){return{}},created:function(){i.bus.$emit("history",!1)}},b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"after-container"},[e("img",{attrs:{src:n("3ojL"),alt:""}})])}]};var I=n("vSla")(w,b,!1,function(t){n("hDIw")},"data-v-fb388768",null).exports,x={props:{headimgurl:{type:String}},data:function(){return{openId:"",historyList:[]}},created:function(){i.bus.$emit("history",!0)},mounted:function(){this.openId=this.$route.params.openId,this.requestHistory()},beforeDestroy:function(){i.bus.$emit("history",!1)},methods:{requestHistory:function(){var t=this,e=i.baseUrl+"/user_history";u.a.get(e,{params:{openId:this.openId}}).then(function(e){1500===e.data.status&&console.log(e.data.message),t.historyList=e.data.history}).catch(function(t){console.log(t)})}}},q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},t._l(t.historyList,function(e){return n("div",{key:e.ansTime,staticClass:"history"},[n("div",{staticClass:"left"},[n("img",{attrs:{src:t.headimgurl,alt:"touxiang"}})]),t._v(" "),n("div",{staticClass:"right"},[n("li",[n("span",{staticClass:"hisTitle"},[t._v("答题时间：  ")]),t._v(t._s(e.ansTime))]),t._v(" "),n("li",[n("span",{staticClass:"hisTitle"},[t._v("已答题目：")]),t._v(" "+t._s(e.qId))]),t._v(" "),n("li",[n("span",{staticClass:"hisTitle li-answer"},[t._v("所选答案：")]),t._v(" "),n("div",{staticClass:"answers"},t._l(e.ans,function(e,s){return n("p",{key:s},[t._v(" "+t._s(e)+" ")])}))])])])}))},staticRenderFns:[]};var A=n("vSla")(x,q,!1,function(t){n("58kj")},"data-v-6cf8dac7",null).exports,F={data:function(){return{index:0,currentQues:{first:"",second:"",third:"",fouth:""},quesList:[],queTitle:"",showInput:!0,prompt:!1,editPosition:{index:-1,number:-1},editInputValue:"",arg:{alertFlag:!1,alertcontent:""}}},methods:{handleClick:function(){var t=this;if(this.yanzheng)if(this.index<3){if(this.quesList.push(this.currentQuesArr),this.index++,3===this.index)return this.showInput=!1,!0;this.cleanUp()}else if(""!==this.queTitle){var e=i.baseUrl+"/set_queslist";u.a.get(e,{params:{queTitle:this.queTitle,quesList:this.quesList}}).then(function(e){t.formateArguments({alertFlag:!0,alertcontent:e.data.message})}).catch(function(t){console.log(t)})}else this.formateArguments({alertFlag:!0,alertcontent:"标题不能为空"});else this.formateArguments({alertFlag:!0,alertcontent:"问题不能为空"})},cleanUp:function(){var t=this;Object.keys(this.currentQues).map(function(e){t.currentQues[e]=""})},handleItemEdit:function(t,e){this.editPosition.index=t,this.editPosition.number=e,this.prompt=!0},handleConfirm:function(){var t=this.editPosition,e=t.index,n=t.number;if(-1!==e&&-1!==n){if(""===this.editInputValue)return this.formateArguments({alertFlag:!0,alertcontent:"您未输入任何内容，请重新编辑"}),!1;this.quesList[e][n]=this.editInputValue,this.editInputValue="",this.editPosition.index=-1,this.editPosition.number=-1,this.prompt=!1}else this.formateArguments({alertFlag:!0,alertcontent:"请确认要编辑的位置"})},handleCancel:function(){this.prompt=!1},formateArguments:function(t){this.arg=Object.assign(this.arg,t)},handleStateChange:function(t){this.arg.alertFlag=t}},computed:{buttonContent:function(){return this.index<2?"下一组":"提交"},currentQuesArr:function(){var t=this;return Object.keys(this.currentQues).map(function(e){return t.currentQues[e]})},yanzheng:function(){var t=this,e=!0;return Object.keys(this.currentQues).map(function(n){""!==t.currentQues[n]||(e=!1)}),e}},components:{Button:p.Button,MessageBox:p.MessageBox,AlertView:h},mounted:function(){}},Q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("AlertView",{attrs:{arg:t.arg},on:{stateChange:t.handleStateChange}}),t._v(" "),n("div",{staticClass:"controlTitle"},[t._v("\n        请输入标题\n    ")]),t._v(" "),n("div",{staticClass:"input-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.queTitle,expression:"queTitle"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.queTitle},on:{input:function(e){e.target.composing||(t.queTitle=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"controlTitle"},[t.showInput?n("span",[t._v("\n            请输入第"+t._s(t.index+1)+"组问题\n        ")]):n("span",[t._v("\n            数据已填充完毕，请提交\n        ")])]),t._v(" "),t.showInput?n("div",{staticClass:"input-block"},[n("div",{staticClass:"input-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentQues.first,expression:"currentQues.first"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.currentQues.first},on:{input:function(e){e.target.composing||t.$set(t.currentQues,"first",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentQues.second,expression:"currentQues.second"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.currentQues.second},on:{input:function(e){e.target.composing||t.$set(t.currentQues,"second",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentQues.third,expression:"currentQues.third"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.currentQues.third},on:{input:function(e){e.target.composing||t.$set(t.currentQues,"third",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentQues.fouth,expression:"currentQues.fouth"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.currentQues.fouth},on:{input:function(e){e.target.composing||t.$set(t.currentQues,"fouth",e.target.value)}}})])]):n("div",{staticClass:"contents"},t._l(t.quesList,function(e,s){return n("div",{key:s,staticClass:"blocks"},[n("div",{staticClass:"controlTitle"},[t._v("\n                第"+t._s(s+1)+"组\n            ")]),t._v(" "),n("div",t._l(e,function(e,i){return n("p",{key:i,staticClass:"block",on:{click:function(e){t.handleItemEdit(s,i)}}},[n("span",[t._v("\n                        "+t._s(i+1)+"、 \n                    ")]),t._v("\n                    "+t._s(e)+"\n                ")])}))])})),t._v(" "),n("Button",{attrs:{type:"primary"},on:{click:t.handleClick}},[t._v("\n        "+t._s(t.buttonContent)+"\n    ")]),t._v(" "),t.prompt?n("div",{staticClass:"prompt"},[n("div",{staticClass:"controlTitle"},[t._v("\n            请输入需要修改的内容\n        ")]),t._v(" "),n("div",{staticClass:"input-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.editInputValue,expression:"editInputValue"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.editInputValue},on:{input:function(e){e.target.composing||(t.editInputValue=e.target.value)}}})]),t._v(" "),n("Button",{staticClass:"promptButton",attrs:{type:"danger"},on:{click:t.handleConfirm}},[t._v("\n            确认\n        ")]),t._v(" "),n("Button",{staticClass:"promptButton",attrs:{type:"default"},on:{click:t.handleCancel}},[t._v("\n            取消\n        ")])],1):t._e()],1)},staticRenderFns:[]};var $=n("vSla")(F,Q,!1,function(t){n("Amc0"),n("sNGx")},"data-v-6af5d163",null).exports;s.default.use(_.a);var H=new _.a({routes:[{path:"/",name:"Before",component:k},{path:"/after",name:"After",component:I},{path:"/history/:openId",name:"ComHistory",component:A},{path:"/control",name:"Control",component:$}]});n("5OHe"),n("D0oh");s.default.use(m.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:H,components:{App:g},template:"<App/>"})},d37e:function(t,e){},hDIw:function(t,e){},pslH:function(t,e){},sNGx:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.dffb261beb48aa1a6794.js.map