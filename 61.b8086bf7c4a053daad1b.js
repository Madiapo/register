(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{cRhG:function(e,n,t){"use strict";t.r(n),t.d(n,"ProfilePageModule",function(){return u});var o=t("ofXK"),i=t("3Pt+"),b=t("TEn/"),a=t("tyNb"),r=t("fXoL"),s=t("c92J"),c=t("I/3d");const l=[{path:"",component:(()=>{class e{constructor(e,n){this._data=e,this.afs=n,this.mainuser=n.doc(`users/${e.getUID()}`),this.sub=this.mainuser.valueChanges().subscribe(e=>{this.name=e.username})}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)(r.Lb(s.a),r.Lb(c.a))},e.\u0275cmp=r.Fb({type:e,selectors:[["app-profile"]],decls:19,vars:1,consts:[["position","stacked"],["type","name","placeholder","Name",3,"ngModel","ngModelChange"],["type","name","placeholder","surname"],["type","tel","placeholder","phone number"],["type","name","placeholder","address"],["expand","block"]],template:function(e,n){1&e&&(r.Ob(0,"ion-header"),r.Ob(1,"ion-toolbar"),r.Ob(2,"ion-title"),r.kc(3,"profile"),r.Nb(),r.Nb(),r.Nb(),r.Ob(4,"ion-content"),r.Ob(5,"ion-item"),r.Mb(6,"ion-label",0),r.Ob(7,"ion-input",1),r.Wb("ngModelChange",function(e){return n.name=e}),r.Nb(),r.Nb(),r.Ob(8,"ion-item"),r.Mb(9,"ion-label",0),r.Mb(10,"ion-input",2),r.Nb(),r.Ob(11,"ion-item"),r.Mb(12,"ion-label",0),r.Mb(13,"ion-input",3),r.Nb(),r.Ob(14,"ion-item"),r.Mb(15,"ion-label",0),r.Mb(16,"ion-input",4),r.Nb(),r.Ob(17,"ion-button",5),r.kc(18,"save"),r.Nb(),r.Nb()),2&e&&(r.Bb(7),r.bc("ngModel",n.name))},directives:[b.e,b.l,b.k,b.c,b.g,b.h,b.f,b.q,i.h,i.j,b.b],styles:[""]}),e})()}];let p=(()=>{class e{}return e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({factory:function(n){return new(n||e)},imports:[[a.j.forChild(l)],a.j]}),e})(),u=(()=>{class e{}return e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({factory:function(n){return new(n||e)},imports:[[o.b,i.e,b.m,p]]}),e})()}}]);