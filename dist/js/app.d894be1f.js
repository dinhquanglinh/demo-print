(function(t){function e(e){for(var n,o,c=e[0],l=e[1],r=e[2],u=0,_=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&_.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(_.length)_.shift()();return i.push.apply(i,r||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},s={app:0},i=[];function o(t){return c.p+"js/"+({portal:"portal"}[t]||t)+"."+{portal:"3f47cc74"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=n);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t);var r=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;r.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",r.name="ChunkLoadError",r.type=n,r.request=i,a[1](r)}s[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=r;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"03eb":function(t,e,a){"use strict";a("c6bc")},2581:function(t,e,a){},"27cf":function(t,e,a){"use strict";a("2581")},"2a99":function(t,e,a){"use strict";a("ed42")},"2fb0":function(t,e,a){"use strict";a("741a")},4076:function(t,e,a){},"41c4":function(t,e,a){"use strict";a("b76f")},4457:function(t,e,a){"use strict";a("4076")},5108:function(t,e,a){"use strict";a("65bf")},"65bf":function(t,e,a){},7215:function(t,e,a){"use strict";a("fb64")},"741a":function(t,e,a){},"9e6d":function(t,e,a){"use strict";a("da02")},a954:function(t,e,a){},b76f:function(t,e,a){},ba51:function(t,e,a){"use strict";a("a954")},c6bc:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),s=function(){var t=this,e=t._self._c;return e("div",[e("router-view"),e("Notications")],1)},i=[],o=function(){var t=this;t._self._c;return t._m(0)},c=[function(){var t=this,e=t._self._c;return e("header",{staticClass:"section-header container-custom"},[e("h1",[t._v("Header")])])}],l={mixins:[],components:{},data(){return{}},computed:{},mounted(){},methods:{}},r=l,u=(a("41c4"),a("2877")),d=Object(u["a"])(r,o,c,!1,null,null,null),_=d.exports,p=function(){var t=this;t._self._c;return t._m(0)},m=[function(){var t=this,e=t._self._c;return e("footer",{staticClass:"section-footer"},[e("div",{staticClass:"section-footer__container"},[e("h1",[t._v("Footer")])])])}],h={},f=h,v=(a("2a99"),Object(u["a"])(f,p,m,!1,null,null,null)),g=v.exports,k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"notications"},[t.showAlert?e("v-alert",{attrs:{type:t.alertType,dismissible:""},on:{input:function(e){t.showAlert=!1}}},[t._v(" "+t._s(t.getTranslatedText(t.alertText))+" ")]):t._e()],1)},b=[],y=(a("907a"),a("986a"),a("1d02"),a("3c5d"),a("1b3b"),a("3d71"),a("c6e3"),a("13d5"),a("14d9"),a("bc3a")),T=a.n(y);const C=T.a.create();function S(t){localStorage.setItem("access_token",t)}function x(){return localStorage.getItem("access_token")}const w=()=>localStorage.getItem("locale")||"en";C.interceptors.request.use(t=>{const e=Object({NODE_ENV:"production",VUE_APP_API_URL:"https://dev-api-afrilotto.bitville.dev",VUE_APP_BASE_SKIN:"green",VUE_APP_SITE:"guinne",VUE_APP_THEME:"default",BASE_URL:"/"}).VUE_APP_TOKEN||x();return e&&(t.headers.Authorization=e,t.headers.ContentType="application/json"),t.headers.locale=w(),t}),C.interceptors.response.use(t=>t,t=>t.response&&t.response.data?Promise.reject(t.response.data):Promise.reject(t.message));var P=C;Object({NODE_ENV:"production",VUE_APP_API_URL:"https://dev-api-afrilotto.bitville.dev",VUE_APP_BASE_SKIN:"green",VUE_APP_SITE:"guinne",VUE_APP_THEME:"default",BASE_URL:"/"}).VUE_APP_MOBILE_APP_DOMAIN;const N=t=>!t||0===t.length,L=t=>!t||0===Object.keys(t).length,O=t=>{const e=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"],a=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];let s=t.getHours(),i=t.getMinutes(),o="";const c=n[t.getDay()],l=t.getDate()<10?"0"+t.getDate():t.getDate(),r=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,u=e[t.getMonth()],d=a[t.getMonth()],_=t.getFullYear(),p=s>=12?"pm":"am",m=s<10?"0"+s:s;s%=12,s=s||12,i=i<10?"0"+i:i,o=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();const h={hours:s,minutes:i,day:l,month:r,monthName:u,monthFullName:d,year:_,convertHours:p,dayName:c,hour24h:m,seconds:o};return h},A=(t,e=2)=>{const a=new Intl.NumberFormat("en-US",{minimumFractionDigits:e,maximumFractionDigits:e});return console.log(a.format(t),"formatter.format(number)"),a.format(t)};var F={data(){return{}},methods:{getTranslatedText(t,e={}){if(!t)return;const a=t.toLowerCase();let n=a;const s=localStorage.getItem("lang"),i=localStorage.getItem("muti_language_"+s)||"";if(!N(i)){const t=JSON.parse(i);n=t[a]||a}if(e)for(const o in e)n=n.replace("["+o+"]",e[o]);return n}}};const D=new n["default"];var j=D,B={mixins:[F],data(){return{showAlert:!1,alertText:"",alertType:"",timeoutDuration:3e3}},created(){j.$on("show-notications",t=>this.showAlertWithTimeout(t))},destroyed(){j.$off("show-notications",()=>{})},methods:{showAlertWithTimeout(t){this.alertText=t.text,this.alertType=t.type,this.showAlert=!0,setTimeout(()=>{this.showAlert=!1},this.timeoutDuration)}}},E=B,$=(a("03eb"),Object(u["a"])(E,k,b,!1,null,null,null)),I=$.exports,M={components:{Footer:g,Header:_,Notications:I}},J=M,U=(a("27cf"),Object(u["a"])(J,s,i,!1,null,null,null)),H=U.exports,V=a("8c4f");const R=[];var K=R;const W=[];var z=W,G=function(){var t=this,e=t._self._c;return e("h2",{},[t._v("Home Page")])},Z=[],q={},Q=q,Y=(a("7215"),Object(u["a"])(Q,G,Z,!1,null,null,null)),X=Y.exports,tt=function(){var t=this,e=t._self._c;return e("v-main",[1===t.step?e("ScanTicketComponent"):e("DetailTicketComponent",{attrs:{dataSource:t.dataDetail,ticketId:t.ticketId,ticketType:t.ticketType}})],1)},et=[],at=function(){var t=this,e=t._self._c;return e("div",{staticClass:"scan-ticket"},[e("h2",{staticClass:"scan-ticket__title"},[t._v(t._s(t.getTranslatedText("scan ticket")))]),e("div",{staticClass:"scan-ticket__select-sport"},[e("RadioCommon",{attrs:{value:"L",label:"Lotto",valueChecked:t.ticketType,nameFunction:"on-select-ticket-type",paramFunction:"L"}}),e("RadioCommon",{attrs:{value:"S",label:"Sport",valueChecked:t.ticketType,nameFunction:"on-select-ticket-type",paramFunction:"S"}})],1),e("div",{staticClass:"scan-ticket__input"},[e("span",{staticClass:"scan-ticket__input-left-addon"},[t._v(t._s(t.ticketType)+" -")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.ticketNumber,expression:"ticketNumber"}],attrs:{type:"text",placeholder:"Enter amount"},domProps:{value:t.ticketNumber},on:{input:function(e){e.target.composing||(t.ticketNumber=e.target.value)}}})]),e("div",{staticClass:"scan-ticket__box-button"},[e("ButtonCommon",{attrs:{className:"w100",isNoHover:!0,isLoading:t.isLoadingButton,isDisable:""===t.ticketNumber,value:"search",nameFunction:"on-search-ticket-detail"}}),e("span",{staticClass:"scan-ticket__text-or"},[t._v(t._s(t.getTranslatedText("or")))]),e("ButtonCommon",{attrs:{className:"w100",isNoHover:!0,isLoading:t.isLoadingButton,type:"active",value:"scan ticket",nameFunction:"onScanCodeBar"}}),e("span",{staticClass:"scan-ticket__text-or"},[t._v(t._s(t.getTranslatedText("or")))]),e("ButtonCommon",{attrs:{className:"w100",isNoHover:!0,isLoading:t.isLoadingButton,value:"Replay",nameFunction:"print-test"}})],1),e("ReaderCode")],1)},nt=[],st=function(){var t=this,e=t._self._c;return e("label",{class:`radio radio__${t.type}${""!==t.className?" "+t.className:""} ${t.isNoHover?"no-hover":""}`,attrs:{disabled:t.isDisable},on:{click:function(e){return t.onChangeRadio()}}},[e("input",{attrs:{type:"radio",name:"radio"},domProps:{value:t.value,checked:t.valueChecked===t.value}}),e("span",{staticClass:"radio-label"},[t._v(t._s(t.getTranslatedText(t.label)))])])},it=[],ot=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box-loader",class:{"screen-page":t.isLoadingPage}},[e("span",{staticClass:"loader"})])},ct=[],lt={props:{isLoadingPage:{type:Boolean,default:!0}},data(){return{}},methods:{}},rt=lt,ut=(a("5108"),Object(u["a"])(rt,ot,ct,!1,null,null,null)),dt=ut.exports,_t={mixins:[F],components:{Loading:dt},props:{type:{type:String,default:"default"},nameFunction:{type:String,default:""},paramFunction:{type:String|Object|Array,default:""},className:{type:String,default:""},value:{type:String,default:""},valueChecked:{type:String,default:""},label:{type:String,default:""},isNoHover:{type:Boolean,default:!1},isDisable:{type:Boolean,default:!1}},data(){return{}},methods:{onChangeRadio(){N(this.nameFunction)||j.$emit(this.nameFunction,this.paramFunction)}}},pt=_t,mt=(a("2fb0"),Object(u["a"])(pt,st,it,!1,null,null,null)),ht=mt.exports,ft=function(){var t=this,e=t._self._c;return e("button",{class:`button button__${t.type}${""!==t.className?" "+t.className:""} ${t.isNoHover?"no-hover":""}`,attrs:{disabled:t.isLoading||t.isDisable},on:{click:function(e){return t.onChangeButton(t.value)}}},[t._v(" "+t._s(t.getTranslatedText(t.value))+" "),t.isLoading?e("Loading",{attrs:{isLoadingPage:!1}}):t._e()],1)},vt=[],gt={mixins:[F],components:{Loading:dt},props:{type:{type:String,default:"default"},nameFunction:{type:String,default:""},paramFunction:{type:String|Object|Array,default:""},className:{type:String,default:""},value:{type:String,default:""},isNoHover:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},isDisable:{type:Boolean,default:!1}},data(){return{}},methods:{onChangeButton(){N(this.nameFunction)||j.$emit(this.nameFunction,this.paramFunction)}}},kt=gt,bt=(a("4457"),Object(u["a"])(kt,ft,vt,!1,null,null,null)),yt=bt.exports;class Tt{get(t,e){return P.get(t,{data:e})}post(t,e){return P.post(t,e)}put(t,e){return P.put(t,e)}delete(t){return P.delete(t)}}var Ct=Tt;class St extends Ct{async searchBetslip(t){const e=T.a.create({headers:{"Content-Type":"application/json",Authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NzA0NCwiZW1haWwiOiJMT05CSS1iMjEzQHBsYWNlaG9sZGVyLmNvbSJ9.aknBTL_Ijtk2m9Y2QAV1KJZtKOg5c9eKX4_U64Dmw1s"}});return await e.get("https://dev-guinee-onedb-retail.bitville.dev/cms/api/retail/betslip/detail/"+t).then(({data:t})=>t)}}var xt=new St,wt=function(){var t=this,e=t._self._c;return e("div",[e("button",{on:{click:t.onButtonClick}},[t._v("Tìm thiết bị Bluetooth")])])},Pt=[],Nt={data(){return{}},methods:{onButtonClick(){window.print()}}},Lt=Nt,Ot=Object(u["a"])(Lt,wt,Pt,!1,null,null,null),At=Ot.exports,Ft={mixins:[F],components:{RadioCommon:ht,ButtonCommon:yt,ReaderCode:At},data(){return{ticketType:"L",isLoadingButton:!1,ticketNumber:"",isShowTrue:!1,text:"",id:null}},created(){j.$on("on-select-ticket-type",t=>this.ticketType=t),j.$on("on-search-ticket-detail",()=>this.onSearchTicketDetail()),j.$on("print-test",()=>this.print())},destroyed(){j.$off("on-select-ticket-type",()=>{}),j.$off("on-search-ticket-detail",()=>{}),j.$off("print-test",()=>{})},mounted(){},methods:{showNotification(t,e){const a={text:t,type:e};j.$emit("show-notications",a)},async onSearchTicketDetail(){try{const t=await this.validateGetTicket();if(!L(t.response)){const{response:e,ticket:a}=t;if(200!==e.status)this.showNotification(e.message,"error");else{const t={data:e.data,ticketId:a,ticketType:this.ticketType};j.$emit("on-show-ticket-detail",t),this.isLoadingButton=!1}}}catch(t){console.log(t),this.isLoadingButton=!1}},async validateGetTicket(){try{this.isLoadingButton=!0;let t=this.ticketNumber;if(N(this.ticketNumber))return this.showNotification("please input ticket number!","warning"),this.isLoadingButton=!1,!1;t=`${this.ticketType}-${t}`;const e=await xt.searchBetslip(t),a={response:e,ticket:t};return a}catch(t){console.log(t)}},print(){}}},Dt=Ft,jt=(a("9e6d"),Object(u["a"])(Dt,at,nt,!1,null,null,null)),Bt=jt.exports,Et=function(){var t=this,e=t._self._c;return e("div",{staticClass:"scan-ticket-detail"},[t.isLoadingScreen?e("LoadingScreen"):[e("h2",{staticClass:"scan-ticket-detail__title"},[t._v(t._s(t.getTranslatedText("scan ticket")))]),e("p",{staticClass:"scan-ticket-detail__desciption"},[t._v(t._s(t.getTranslatedText("ticket details")))]),e("div",{staticClass:"scan-ticket-detail__list-table"},[e("div",{staticClass:"scan-ticket-detail__table"},[e("span",{staticClass:"scan-ticket-detail__table-title"},[t._v(t._s(t.getTranslatedText("ticket details")))]),e("div",{staticClass:"scan-ticket-detail__table-item"},[e("span",{staticClass:"scan-ticket-detail__table-item-text scan-ticket-detail__column-label"},[t._v(t._s(t.getTranslatedText("purchase date")))]),e("span",{staticClass:"scan-ticket-detail__table-item-text scan-ticket-detail__column-value"},[t._v(" "+t._s(t.renderDate(t.dataSource.transaction.created_at))+" ")])]),e("div",{staticClass:"scan-ticket-detail__table-item"},[e("span",{staticClass:"scan-ticket-detail__table-item-text scan-ticket-detail__column-label"},[t._v(t._s(t.getTranslatedText("payment received")))]),e("span",{staticClass:"scan-ticket-detail__table-item-text scan-ticket-detail__column-value"},[t._v(t._s(t.dataSource.transaction.currency_code)+" "+t._s(t.renderPrice(t.dataSource.transaction.total||t.dataSource.transaction.amount))+" ")])]),e("div",{staticClass:"scan-ticket-detail__table-item"},[e("span",{staticClass:"scan-ticket-detail__table-item-text scan-ticket-detail__column-label"},[t._v(t._s(t.getTranslatedText("ticket")))]),e("span",{staticClass:"scan-ticket-detail__table-item-text scan-ticket-detail__column-value"},[t._v(t._s(t.ticketId))])])]),e("div",{staticClass:"scan-ticket-detail__table"},[e("span",{staticClass:"scan-ticket-detail__table-title"},[t._v(t._s(t.getTranslatedText("ticket")))]),e("table",[e("thead",[e("tr",[e("th",[t._v(t._s(t.getTranslatedText("no")))]),e("th",[t._v(t._s(t.getTranslatedText("select")))]),e("th",[t._v(t._s(t.getTranslatedText("game")))]),e("th",[t._v(t._s(t.getTranslatedText("wager")))]),e("th",[t._v(t._s(t.getTranslatedText("winnings")))])])]),e("tbody",t._l(t.dataSource.details,(function(a,n){return e("tr",{key:n},[e("td",[t._v("#"+t._s(n+1))]),e("td",t._l(a.bet.bets,(function(a,n){return e("div",{key:n,staticClass:"scan-ticket-detail__table-list-number"},[n>0?e("span",[t._v("+")]):t._e(),t._l(a,(function(a,n){return e("div",{key:n,staticClass:"scan-ticket-detail__table-item-number"},[t._v(" "+t._s(a)+" ")])}))],2)})),0),e("td",[t._v(t._s(a.game_name.replace(/-/g," ")))]),e("td",[t._v(t._s(t.renderPrice(a.wager)))]),e("td",[t._v(t._s(a.winnings?t.renderPrice(a.winnings):"N/A"))])])})),0)])]),e("div",{staticClass:"scan-ticket-detail__table"},[e("span",{staticClass:"scan-ticket-detail__table-title"},[t._v(t._s(t.getTranslatedText("draw")))]),t._l(t.dataSource.transaction.events,(function(a,n){return e("div",{key:n,staticClass:"scan-ticket-detail__table-item-draw"},[e("div",{staticClass:"scan-ticket-detail__table-item"},[e("span",{staticClass:"scan-ticket-detail__table-item-text scan-ticket-detail__column-label"},[t._v(t._s(t.getTranslatedText("draw date")))]),e("span",{staticClass:"scan-ticket-detail__table-item-text scan-ticket-detail__column-value"},[t._v(" "+t._s(t.renderDate(a.draw_date))+" ")])]),e("div",{staticClass:"scan-ticket-detail__table-item"},[e("span",{staticClass:"scan-ticket-detail__table-item-text scan-ticket-detail__column-label"},[t._v(t._s(t.getTranslatedText("purchase date")))]),t._l(a.results,(function(a,n){return e("div",{key:n,staticClass:"scan-ticket-detail__table-list-number"},[n>0?e("span",[t._v("+")]):t._e(),t._l(a,(function(a,n){return e("div",{key:n,staticClass:"scan-ticket-detail__table-item-number"},[t._v(" "+t._s(a)+" ")])}))],2)}))],2)])}))],2),e("div",{staticClass:"scan-ticket-detail__table"},[e("span",{staticClass:"scan-ticket-detail__table-title"},[t._v(t._s(t.dataSource.transaction.cancelations>0?t.getTranslatedText("Ticket is canceled"):t.getTranslatedText("winnings")))]),t.isCheckShowMakePatment?e("div",{staticClass:"scan-ticket-detail__table-item"},[e("span",{staticClass:"scan-ticket-detail__table-item-text scan-ticket-detail__column-label"},[t._v(t._s(t.getTranslatedText("make payment")))]),e("span",{staticClass:"scan-ticket-detail__table-item-text scan-ticket-detail__column-value"},[t._v(t._s(t.renderMakePayment())+" ")])]):t._e(),0===t.dataSource.transaction.winnings&&t.dataSource.transaction.cancelations<=0?e("div",{staticClass:"scan-ticket-detail__table-empty"},[e("span",[t._v(t._s(t.getTranslatedText("no winnings")))])]):t._e(),t._l(t.payments,(function(a,n){return e("div",{key:n,staticClass:"scan-ticket-detail__table-payment-list"},[e("div",{staticClass:"scan-ticket-detail__table-item"},[e("span",{staticClass:"scan-ticket-detail__table-item-text scan-ticket-detail__column-label"},[t._v(t._s(t.getTranslatedText("payment date")))]),e("span",{staticClass:"scan-ticket-detail__table-item-text scan-ticket-detail__column-value"},[t._v(" "+t._s(t.renderDate(a.payment_created_at))+" ")])]),e("div",{staticClass:"scan-ticket-detail__table-item"},[e("span",{staticClass:"scan-ticket-detail__table-item-text scan-ticket-detail__column-label"},[t._v(t._s(t.getTranslatedText("amount")))]),e("span",{staticClass:"scan-ticket-detail__table-item-text scan-ticket-detail__column-value"},[t._v(" "+t._s(t.dataSource.transaction.currency_code)+" "+t._s(t.renderPrice(a.payment_total))+" ")])])])}))],2)])]],2)},$t=[],It={mixins:[F],components:{RadioCommon:ht,ButtonCommon:yt,LoadingScreen:dt},props:{dataSource:{type:Object,default:()=>{}},ticketId:{type:String,default:""},ticketType:{type:String,default:""}},data(){return{isLoadingScreen:!0,payments:null,isCheckShowMakePatment:!1}},created(){this.fetchData()},destroyed(){},methods:{showNotification(t,e){const a={text:t,type:e};j.$emit("show-notications",a)},fetchData(){const{transaction:t}=this.dataSource;let e=parseFloat(t.winnings)>0&&parseFloat(t.winnings)>parseFloat(t.paid)+parseFloat(t.payments),a=parseFloat(t.cancelations)>0&&parseFloat(t.cancelations)>parseFloat(t.paid)+parseFloat(t.payments);if((e||a)&&(this.isCheckShowMakePatment=!0),"L"===this.ticketType){const t=this.dataSource.details.filter(t=>t.payment_total&&t.payment_total>0);this.payments=t,console.log(t,"payments"),this.isLoadingScreen=!1}if("S"===this.ticketType){let t=this.dataSource.details;t.paid=0,t.payments>0&&(payments=[{payment_created_at:t.paid_date,payment_total:t.payments}],this.payments=payments),this.isLoadingScreen=!1}},renderMakePayment(){const t=parseFloat(this.dataSource.transaction.winnings)+parseFloat(this.dataSource.transaction.cancelations)-(parseFloat(this.dataSource.transaction.paid)+parseFloat(this.dataSource.transaction.payments));return A(t)},renderDate(t){const e=O(new Date(t));let a=`${e.day}/${e.month}/${e.year} ${e.hour24h}:${e.minutes}`;return a},renderPrice(t){return A(t)}}},Mt=It,Jt=(a("ba51"),Object(u["a"])(Mt,Et,$t,!1,null,null,null)),Ut=Jt.exports,Ht={components:{DetailTicketComponent:Ut,ScanTicketComponent:Bt},data(){return{step:1,dataDetail:null,ticketId:"",ticketType:""}},created(){j.$on("on-show-ticket-detail",t=>this.onShowTicketDetail(t))},destroyed(){j.$off("on-show-ticket-detail",()=>{})},methods:{onShowTicketDetail(t){console.log(t),this.dataDetail=t.data,this.ticketId=t.ticketId,this.ticketType=t.ticketType,this.step=2}}},Vt=Ht,Rt=Object(u["a"])(Vt,tt,et,!1,null,null,null),Kt=Rt.exports;const Wt=[{path:"/",name:"Home Page",component:X},{path:"/scan-ticket",name:"Ticket Detail Page",component:Kt}];var zt=Wt;n["default"].use(V["a"]);const Gt=new V["a"]({mode:"history",base:"/",routes:[...zt,...K,...z,{path:"/*",name:"NotFound",component:()=>a.e("portal").then(a.bind(null,"a17e"))}]});Gt.beforeEach((t,e,a)=>{var n;const s=new URLSearchParams(window.location.search).get("token"),i=(null===(n=t.query)||void 0===n?void 0:n.lang)||null,o=s||x();s&&S(s),i&&localStorage.setItem("locale",i),window.scrollTo({top:0});const c=e=>t.matched.some(t=>t.meta[e]);c("authenticated")&&null==o&&a({name:"Login"}),c("guest")&&null!=o&&a({name:"Home"}),a()});var Zt=Gt,qt=a("2f62");n["default"].use(qt["a"]);var Qt=new qt["a"].Store({state:{},getters:{},mutations:{},actions:{}}),Yt=a("ce5b"),Xt=a.n(Yt);a("bf40"),a("5363");n["default"].use(Xt.a);const te={iconfont:"mdi",theme:{options:{customProperties:!0},dark:!1,light:!1}};var ee=new Xt.a(te);n["default"].config.productionTip=!1,T.a.defaults.headers.common["Access-Control-Allow-Origin"]="*",new n["default"]({router:Zt,store:Qt,vuetify:ee,render:t=>t(H)}).$mount("#app")},da02:function(t,e,a){},ed42:function(t,e,a){},fb64:function(t,e,a){}});
//# sourceMappingURL=app.d894be1f.js.map