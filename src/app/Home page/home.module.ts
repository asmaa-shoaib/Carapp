import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { SharedModulesModule } from '../Shared/shared-modules/shared-modules.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from '../Components/about/about.component';
import { SearchComponent } from './search/search.component';

import { HeaderComponent } from './header/header.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { DeorationComponent } from './deoration/deoration.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { Decoration2Component } from './decoration2/decoration2.component';
import { BrandModule } from './../Brand/brand.module';
import { BranchModule } from './../Branch/branch.module';
const routes: Routes = [

  {path:"about" ,component:AboutComponent},
  {path:"search" ,component:SearchComponent},
  {path:"" ,component:HomeComponent},
  ];

@NgModule({
  declarations: [
    AboutComponent ,
    HomeComponent ,
    SearchComponent ,
    HeaderComponent,
    ReviewsComponent,
    DeorationComponent,
    MostPopularComponent,
    Decoration2Component,

  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    SharedModulesModule,
    BrandModule,
    BranchModule
  ],
  exports:[]
})
export class HomeModule implements OnInit{
  ngOnInit(): void {

  }
}
