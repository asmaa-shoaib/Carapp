import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModulesModule } from '../../Shared/shared-modules/shared-modules.module';
import { LoginComponent       } from './../Auth/login/login.component';
import { LogoutComponent      } from './../Auth/logout/logout.component';
import { RegisterComponent    } from './../Auth/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { Layout2Component } from '../../Components/Layouts/layout2/layout2.component';

const routes: Routes = [
  {path:"login" ,component:LoginComponent},
  {path:"logout" ,component:LogoutComponent},
  {path:"register" ,component:RegisterComponent},
  {path:"home" ,component:Layout2Component,loadChildren:()=>import("../../admin/admin.module").then(m=>m.AdminModule)},
  {path:"" ,component:LoginComponent},
]
 
@NgModule({
  declarations: [
    LoginComponent,     
    LogoutComponent,    
    RegisterComponent  
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    SharedModulesModule
  ]
})
export class AuthModule { }
