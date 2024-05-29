import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { RouterModule } from '@angular/router';
import { Layout3Component } from '../../Components/Layouts/layout3/layout3.component';
import { Layout2Component } from '../../Components/Layouts/layout2/layout2.component';
import { Layout1Component } from '../../Components/Layouts/layout1/layout1.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AuthNavComponent } from './auth-nav/auth-nav.component';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';

@NgModule({
  declarations: [
    Layout3Component,
    Layout2Component,
    Layout1Component,
    NavBarComponent,
    FooterComponent,
    AuthNavComponent,
    DashboardNavComponent],
  imports: [ 
    RouterModule,
    CommonModule
  ]
  ,exports: [RouterModule]
})
export class LayoutsModule { }
