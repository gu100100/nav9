import{Cd as C,Hb as x,Jb as a,Ld as h,Xb as i,Yb as r,Yd as d,Zb as c,gc as s,gd as S,hb as g,lb as n,od as I,pc as m,rc as l,sc as f,tb as u,td as _,zd as y}from"./chunk-2QCQVAUE.js";function D(t,p){if(t&1&&(i(0,"p"),m(1),r()),t&2){let e=s();n(),l("TOKEN: ",e.token,"")}}function E(t,p){if(t&1&&(i(0,"p"),m(1),r()),t&2){let e=s();n(),f("",e.$t("_devBranch"),": ",e.config.branch,"")}}function b(t,p){if(t&1&&(i(0,"p"),m(1),r()),t&2){let e=s();n(),f("",e.$t("_prevDevTime"),": ",e.date,"")}}var v=class t{$t=d;isSelfDevelop=h;token=C();config=_;date=document.getElementById("META-NAV")?.dataset?.date||d("_unknow");currentVersionSrc=`https://img.shields.io/badge/current-v${y}-red.svg?longCache=true&style=flat-square`;constructor(){}ngOnInit(){}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=u({type:t,selectors:[["system-info"]],decls:11,vars:6,consts:[[4,"ngIf"],[3,"src"],["href","https://github.com/xjh22222228/nav/releases","target","_blank"],["src","https://img.shields.io/github/v/release/xjh22222228/nav"]],template:function(e,o){e&1&&(i(0,"div"),x(1,D,2,1,"p",0)(2,E,2,2,"p",0)(3,b,2,2,"p",0),i(4,"p"),m(5),c(6,"img",1),r(),i(7,"p"),m(8),i(9,"a",2),c(10,"img",3),r()()()),e&2&&(n(),a("ngIf",!o.isSelfDevelop),n(),a("ngIf",!o.isSelfDevelop),n(),a("ngIf",!o.isSelfDevelop),n(2),l("",o.$t("_curVer"),": "),n(),a("src",o.currentVersionSrc,g),n(2),l(" ",o.$t("_newVer"),": "))},dependencies:[I,S],styles:["p[_ngcontent-%COMP%]{margin-bottom:10px}"]})};export{v as default};