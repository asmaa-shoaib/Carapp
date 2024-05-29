import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { SharedModulesModule } from '../Shared/shared-modules/shared-modules.module';

import { BrandItemComponent } from './brand-item/brand-item.component';
import { BrandsComponent } from './brands/brands.component';
import { BrandDetailsComponent } from './brand-details/brand-details.component';

const routes: Routes = [
  // {path:"all" ,component:BrandsComponent},
  {path:"details/:id" ,component:BrandDetailsComponent}, 
];
@NgModule({
  declarations: [
    BrandsComponent,
    BrandItemComponent,
    BrandDetailsComponent
  ],
  imports:[
    CommonModule,
    [RouterModule.forChild(routes)],
    SharedModulesModule,
  ],
  exports:[BrandsComponent]
})
export class BrandModule{}
