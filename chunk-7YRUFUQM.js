import{a as G}from"./chunk-X3XHAFN7.js";import{a as j,b as U}from"./chunk-QYFIJJ3Z.js";import{a as R}from"./chunk-3V4CUW7I.js";import{a as D,b as W}from"./chunk-LMUXCTUL.js";import"./chunk-FADQ23NJ.js";import{Bb as q,Ob as F,Pb as H,Wb as J,mb as O,pb as L,zb as $}from"./chunk-DS3HWSCK.js";import{Bc as C,Cb as S,Dc as w,Ec as N,Fc as z,Ib as _,Nd as B,Ob as f,Qb as E,ac as c,bc as m,cc as y,ee as T,f as v,g,he as A,jc as k,lc as x,od as M,qb as s,vb as u,wd as P,xc as l,yc as h,zc as b}from"./chunk-WL4U4DRY.js";var V=v(G());var Z=v(q());function K(a,t){a&1&&y(0,"nz-spin",10)}function Q(a,t){if(a&1&&(c(0,"p",11),l(1),m()),a&2){let n=x();s(),b("\u8017\u65F6 ",n.seconds," \u79D2")}}function X(a,t){if(a&1&&(c(0,"p",11),l(1),m()),a&2){let n=x();s(),C(" ",n.$t("_processing")," ",n.currentNumber," / ",n.countAll," ")}}var I=class a{constructor(t,n){this.message=t;this.notification=n}$t=A;submitting=!1;websiteList=T;isExportIcon=!1;seconds=0;currentNumber=0;countAll=0;ngOnInit(){}loadImage(t){return new Promise(n=>{if(!t)return n(null);let e=new Image;e.crossOrigin="Anonymous",e.onload=function(){n(e)},e.onerror=function(){n(null)},e.src=t})}imageToBase64(t,n=!0){return g(this,null,function*(){let e=yield this.loadImage(t.icon);if(e)try{let o=document.createElement("canvas");o.width=32,o.height=32,o.getContext("2d").drawImage(e,0,0,32,32);let r=o.toDataURL();return t.icon=r,r}catch{}else{if(!n)return;try{if(!t.icon)return;let i=yield H({url:t.icon});i.data.base64&&(t.icon=i.data.base64,yield this.imageToBase64(t,!1))}catch(i){let o=document.getElementById("error-msg");if(o){let p=`
          <a href="${t.icon}" target="_blank">${t.name} ${t.icon}</a>
          <div>${i.response?.data?.message||i.message}</div>
        `;o.innerHTML=p+o.innerHTML}}}})}bookmarksExport(){return g(this,null,function*(){if(!B())return this.notification.error("Error","\u8BF7\u6388\u6743");if(this.submitting)return;let t=this;this.seconds=0,this.countAll=0,this.currentNumber=0,this.submitting=!0;let n=setInterval(()=>{this.seconds+=1},1e3),e=JSON.parse(JSON.stringify(this.websiteList)),i=[];function o(p){Array.isArray(p)&&p.forEach(r=>{["id","rate","top","topTypes","index","ownVisible","breadcrumb","ok","__name__","__desc__","collapsed","tags"].forEach(d=>{delete r[d]}),Array.isArray(r.nav)&&o(r.nav),r.url&&i.push(t.imageToBase64(r).finally(()=>{t.currentNumber+=1}))})}this.isExportIcon&&(o(e),this.countAll=i.length,yield Promise.allSettled(i)),F({data:Z.default.compress(JSON.stringify(e))}).then(p=>{let r="\u53D1\u73B0\u5BFC\u822A\u4E66\u7B7E.html",d=new Blob([p.data.data],{type:"text/html;charset=utf-8"});(0,V.saveAs)(d,r),this.notification.success("\u5BFC\u51FA\u6210\u529F",r,{nzDuration:0})}).finally(()=>{this.submitting=!1,clearInterval(n)})})}static \u0275fac=function(n){return new(n||a)(u(J),u(R))};static \u0275cmp=S({type:a,selectors:[["system-bookmark-export"]],decls:16,vars:9,consts:[["nzSimple","","nzSize","large","class","text-center",4,"ngIf"],[1,"text-center"],[3,"ngModelChange","ngModel"],[1,"ml-2.5"],["class","mt-2.5",4,"ngIf"],[1,"book-wrapper","mt-2.5"],["src","assets/img/bookmark.svg","draggable","false",1,"logo",3,"click"],[1,"whitespace-nowrap","mt-2.5",3,"click"],[1,"err"],["id","error-msg"],["nzSimple","","nzSize","large",1,"text-center"],[1,"mt-2.5"]],template:function(n,e){n&1&&(_(0,K,1,0,"nz-spin",0),c(1,"div",1)(2,"nz-switch",2),z("ngModelChange",function(o){return N(e.isExportIcon,o)||(e.isExportIcon=o),o}),m(),c(3,"span",3),l(4),m(),_(5,Q,2,1,"p",4)(6,X,2,3,"p",4),m(),c(7,"div",5)(8,"div")(9,"img",6),k("click",function(){return e.bookmarksExport()}),m(),c(10,"p",7),k("click",function(){return e.bookmarksExport()}),l(11),m()()(),c(12,"div",8)(13,"h2"),l(14),m(),y(15,"pre",9),m()),n&2&&(f("ngIf",e.submitting),s(2),w("ngModel",e.isExportIcon),s(2),h(e.$t("_exportIcons")),s(),f("ngIf",e.seconds>0),s(),f("ngIf",e.countAll>0),s(5),b(" ",e.$t("_clickExport")," "),s(),E("noopacity",e.countAll>0),s(2),h(e.$t("_errorIcons")))},dependencies:[P,M,U,j,W,D,$,O,L],styles:[".book-wrapper[_ngcontent-%COMP%]{text-align:center}.book-wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%], .book-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{cursor:pointer}#error-msg[_ngcontent-%COMP%]{white-space:pre-line;background-color:#f2f2f2;border-radius:8px;padding:0 12px}.err[_ngcontent-%COMP%]{opacity:0}.err.noopacity[_ngcontent-%COMP%]{opacity:1}"]})};export{I as default};
