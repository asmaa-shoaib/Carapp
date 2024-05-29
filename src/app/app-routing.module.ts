import { NgModule, Component } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { SharedModulesModule } from './Shared/shared-modules/shared-modules.module';
import { Layout1Component } from './Components/Layouts/layout1/layout1.component';
import { Layout2Component } from './Components/Layouts/layout2/layout2.component';
import { Layout3Component } from './Components/Layouts/layout3/layout3.component';
import { authLimitGuard } from './Guard/auth-limit.guard';
const routes: Routes = [
{path:"home",component:Layout1Component,loadChildren:()=>import("../app/Home page/home.module").then(m=>m.HomeModule)},
{path:"dashboard",component:Layout2Component,loadChildren:()=>import("../app/admin/admin.module").then(m=>m.AdminModule),canActivate:[authLimitGuard]},
{path:"admin",component:Layout3Component,loadChildren:()=>import("../app/admin/Auth/auth.module").then(m=>m.AuthModule)},
{path:"branches",component:Layout1Component,loadChildren:()=>import("../app/Branch/branch.module").then(m=>m.BranchModule)},
{path:"brands",component:Layout1Component,loadChildren:()=>import("../app/Brand/brand.module").then(m=>m.BrandModule)},
{path:"cars",component:Layout1Component,loadChildren:()=>import("../app/Car/car.module").then(m=>m.CarModule)},
{path:"",component:Layout1Component,loadChildren:()=>import("../app/Home page/home.module").then(m=>m.HomeModule)},
{path:"**" ,component:NotFoundComponent}
];
const routerOption:ExtraOptions={
  scrollPositionRestoration:'enabled',
  anchorScrolling:"enabled"
}

@NgModule({
  imports: [
    [RouterModule.forRoot(routes,routerOption)]
  ,SharedModulesModule]
  ,exports: [RouterModule]
})
export class AppRoutingModule {

 }
