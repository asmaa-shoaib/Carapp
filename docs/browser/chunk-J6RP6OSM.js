import{Aa as u,Ba as I,Ca as L,Ea as M,F as p,G as m,Ga as k,Ha as N,J as c,L as w,La as R,M as r,Ma as g,N as n,O as f,Oa as _,Q as C,X as a,Za as D,ja as U,ma as F,p as S,s as l,t as y,va as d,xa as b,za as x}from"./chunk-NW4OQXXO.js";function V(t,e){t&1&&(r(0,"p",10),a(1,"password or mail is wrong"),n())}var v=(()=>{let e=class e{constructor(i,o,s){this._Router=i,this.UserServiceService=o,this._FormBuilder=s,this.isLogged=!1,this.User={email:"",password:""},this.UserServiceService.is_logged()&&this._Router.navigateByUrl("/home")}createUser(){this.User={email:this.loginForm.controls.email.value,password:this.loginForm.controls.password.value}}show(){this.loginForm.patchValue({email:"",password:""})}Login(){this.createUser(),this.UserServiceService.login(this.User).subscribe(i=>{localStorage.setItem("token",i.token),this._Router.navigateByUrl("/dashboard")},i=>{console.log(i),this.show(),this.alert_error=!0,this._Router.navigateByUrl("/admin/login")})}Validation(){this.loginForm=this._FormBuilder.group({email:["",[u.required,u.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],password:["",[u.required]]})}ngOnInit(){this.Validation()}};e.\u0275fac=function(o){return new(o||e)(m(d),m(g),m(R))},e.\u0275cmp=l({type:e,selectors:[["app-login"]],decls:13,vars:3,consts:[[1,"container","py-5"],[1,"row","py-5"],[1,"col-lg-5","col-md-7","col-11","mx-auto"],[1,"form","bg-secondary","rounded-3","bg-light","shadow-lg","p-5",3,"formGroup"],[1,"d-md-inline-block","d-lg-block","text-lg-center","px-3","text-darkGreen"],["class","alert alert-danger",4,"ngIf"],[1,"form-group","pb-3"],["type","text","formControlName","email","placeholder","mail",1,"form-control"],["type","password","formControlName","password","placeholder","password",1,"form-control"],[1,"btn","bg-Green",3,"disabled","click"],[1,"alert","alert-danger"]],template:function(o,s){o&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3)(4,"h2",4),a(5,"login form"),n(),w(6,V,2,0,"p",5),r(7,"div",6),f(8,"input",7),n(),r(9,"div",6),f(10,"input",8),n(),r(11,"button",9),C("click",function(){return s.Login()}),a(12,"Login"),n()()()()()),o&2&&(p(3),c("formGroup",s.loginForm),p(3),c("ngIf",s.alert_error),p(5),c("disabled",s.loginForm.invalid))},dependencies:[U,M,x,I,L,k,N]});let t=e;return t})();var j=(()=>{let e=class e{constructor(i,o){this.UserServiceService=i,this._Router=o}Logout(){this.UserServiceService.logout()}ngOnInit(){this.Logout(),this._Router.navigateByUrl("/admin/login")}};e.\u0275fac=function(o){return new(o||e)(m(g),m(d))},e.\u0275cmp=l({type:e,selectors:[["app-logout"]],decls:2,vars:0,template:function(o,s){o&1&&(r(0,"p"),a(1,"logout works!"),n())}});let t=e;return t})();var B=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=l({type:e,selectors:[["app-register"]],decls:2,vars:0,template:function(o,s){o&1&&(r(0,"p"),a(1,"register works!"),n())}});let t=e;return t})();var T=[{path:"login",component:v},{path:"logout",component:j},{path:"register",component:B},{path:"home",component:_,loadChildren:()=>import("./chunk-DIZCJCU4.js").then(t=>t.AdminModule)},{path:"",component:v}],ee=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=y({type:e}),e.\u0275inj=S({imports:[F,[b.forChild(T)],D]});let t=e;return t})();export{ee as AuthModule};