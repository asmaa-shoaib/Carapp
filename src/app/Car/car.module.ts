import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { SharedModulesModule } from '../Shared/shared-modules/shared-modules.module';

import { CarsComponent } from './cars/cars.component'; 
import { DetailsComponent } from './details/details.component';
import { ComparisonComponent } from './comparison/comparison.component'; 
import { ComparItemComponent } from './compar-item/compar-item.component';
import { ShowCarComponent } from './show-car/show-car.component'; 
const routes: Routes = [
  {path:"detail/:id" ,component:DetailsComponent},
  {path:"compare" ,component:ComparisonComponent},
  {path:"all" ,component:CarsComponent},

];
 
@NgModule({
  declarations: [
    CarsComponent,
    DetailsComponent,
    ComparisonComponent,
    ComparItemComponent,
    ShowCarComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    SharedModulesModule,
  ],
  exports:[]
})
export class CarModule { }
