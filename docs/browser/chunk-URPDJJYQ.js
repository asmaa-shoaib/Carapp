import{C as _,F as o,G as g,J as d,L as c,M as a,N as s,O as l,Pa as T,R as C,Ua as P,V as p,Va as h,Wa as w,X as f,Y as x,Za as A,c as D,ia as v,ja as y,ma as S,p as B,s as u,t as b,ta as I,wa as M,xa as O}from"./chunk-NW4OQXXO.js";var E=D(T());function j(t,e){t&1&&l(0,"img",17)}function L(t,e){if(t&1&&l(0,"img",18),t&2){let r=C().$implicit;p("src","https://localhost:7221/Uploads/Brands/",r.imageUrl,"",_)}}function R(t,e){if(t&1&&(a(0,"div",13)(1,"a",14),c(2,j,1,0,"img",15),s(),a(3,"a",14),c(4,L,1,1,"img",16),s()()),t&2){let r=e.$implicit;o(1),p("routerLink","/brands/details/",r.id,""),o(1),d("ngIf",!r.imageUrl),o(1),p("routerLink","/brands/details/",r.id,""),o(1),d("ngIf",r.imageUrl)}}function $(t,e){t&1&&l(0,"img",17)}function z(t,e){if(t&1&&l(0,"img",18),t&2){let r=C().$implicit;p("src","https://localhost:7221/Uploads/Brands/",r.imageUrl,"",_)}}function q(t,e){if(t&1&&(a(0,"div",13)(1,"a",14),c(2,$,1,0,"img",15),s(),a(3,"a",14),c(4,z,1,1,"img",16),s()()),t&2){let r=e.$implicit;o(1),p("routerLink","/brands/details/",r.id,""),o(1),d("ngIf",!r.imageUrl),o(1),p("routerLink","/brands/details/",r.id,""),o(1),d("ngIf",r.imageUrl)}}var Q=(()=>{let e=class e{constructor(i){this._BrandServicesService=i,this.Brands=[],this.FirstArr=[],this.SecondArr=[]}GetAllBrands(){this._BrandServicesService.GetAll().subscribe(i=>{this.Brands=i,this.FirstArr=this.Brands.slice(0,this.Brands.length/2),this.SecondArr=this.Brands.slice(this.Brands.length/2,this.Brands.length)},i=>{})}ngOnInit(){this.GetAllBrands(),E.default.init()}};e.\u0275fac=function(n){return new(n||e)(g(h))},e.\u0275cmp=u({type:e,selectors:[["app-brands"]],decls:18,vars:2,consts:[[1,"brands-section"],[1,"py-md-5","py-lg-5","py-2"],["id","carouselExampleAutoplaying","data-bs-ride","carousel",1,"carousel","slide","Brands"],[1,"carousel-inner"],[1,"carousel-item","active"],[1,"row"],["class","text-center brand col",4,"ngFor","ngForOf"],[1,"carousel-item"],["type","button","data-bs-target","#carouselExampleAutoplaying","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#carouselExampleAutoplaying","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"],[1,"text-center","brand","col"],[3,"routerLink"],["src","../../../assets/images/favicon.ico",4,"ngIf"],["class","img-fluid ",3,"src",4,"ngIf"],["src","../../../assets/images/favicon.ico"],[1,"img-fluid",3,"src"]],template:function(n,m){n&1&&(a(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),c(6,R,5,4,"div",6),s()(),a(7,"div",7)(8,"div",5),c(9,q,5,4,"div",6),s()()(),a(10,"button",8),l(11,"span",9),a(12,"span",10),f(13,"Previous"),s()(),a(14,"button",11),l(15,"span",12),a(16,"span",10),f(17,"Next"),s()()()()()),n&2&&(o(6),d("ngForOf",m.FirstArr),o(3),d("ngForOf",m.SecondArr))},dependencies:[v,y,M],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box}h2[_ngcontent-%COMP%]{position:relative}.Brands[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%]{background-image:linear-gradient(to right,#fff,#fff,rgba(255,255,255,0));width:50px}.Brands[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%]{background-image:linear-gradient(to left,#fff,#fff,rgba(255,255,255,0));width:50px}.Brands[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80%}@media screen and (min-width: 992px){.carousel-inner[_ngcontent-%COMP%]{overflow:visible}.brands-section[_ngcontent-%COMP%]{min-height:30vh;max-height:40vh;overflow:hidden}.Brands[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40%;height:auto;transition:transform .2s}img[_ngcontent-%COMP%]:hover{width:45%;transform:scale(1.2)}}@media screen and (max-width: 450px){.Brands[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%], .Brands[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%]{width:25px}}"]});let t=e;return t})();function H(t,e){if(t&1&&(a(0,"div",5),l(1,"app-car-item",6),s()),t&2){let r=e.$implicit;o(1),d("ParamNum",r.id)}}var k=(()=>{let e=class e{constructor(i,n,m){this._ActivatedRoute=i,this._CarService=n,this._BrandServicesService=m,this.BrandId=0,this.Cars=[]}GetID(){let i;return this._ActivatedRoute.paramMap.subscribe(n=>(i=n.get("id"),i?(this.BrandId=+i,console.log(this.BrandId),this.getCarInBrand(),this.BrandId):0),n=>{console.log(n)}),this.BrandId}GetBrand(i){this._BrandServicesService.GetBrand(i).subscribe(n=>{console.log(n),this.Brand=n,console.log(this.Brand)},n=>{console.log(n)})}getCarInBrand(){this._BrandServicesService.GetBrandCars(this.BrandId).subscribe(i=>{console.log(i),this.Cars=i,console.log(this.Cars)},i=>{console.log(i)})}ngOnInit(){this.GetBrand(this.GetID())}};e.\u0275fac=function(n){return new(n||e)(g(I),g(P),g(h))},e.\u0275cmp=u({type:e,selectors:[["app-brand-details"]],decls:6,vars:2,consts:[[1,"py-5","bg-white"],[1,"container","py-5"],["data-aos","fade-up",1,"d-md-inline-block","d-lg-block","text-lg-center","px-3"],[1,"row","cars","py-5"],["class","col-lg-4 col-sm-6 mx-auto ",4,"ngFor","ngForOf"],[1,"col-lg-4","col-sm-6","mx-auto"],["data-aos","fade-up",3,"ParamNum"]],template:function(n,m){n&1&&(a(0,"section",0)(1,"div",1)(2,"h2",2),f(3),s(),a(4,"div",3),c(5,H,2,1,"div",4),s()()()),n&2&&(o(3),x(m.Brand.name),o(2),d("ngForOf",m.Cars))},dependencies:[v,w]});let t=e;return t})();var J=[{path:"details/:id",component:k}],se=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=b({type:e}),e.\u0275inj=B({imports:[S,[O.forChild(J)],A]});let t=e;return t})();export{Q as a,se as b};