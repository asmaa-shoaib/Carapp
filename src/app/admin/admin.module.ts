import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModulesModule } from '../Shared/shared-modules/shared-modules.module';

import { DashboardComponent } from './DashBoard F/Admin-dashboard/dashboard.component';

import { AddBrandComponent } from './DashBoard F/Brand/add-brand/add-brand/add-brand.component';
import { EditBrandComponent } from './DashBoard F/Brand/edit-brand/edit-brand.component';
import { BrandOperationsComponent } from './DashBoard F/Brand/brand-operations/brand-operations.component';

import { AddCarComponent } from './DashBoard F/Car/add-car/add.component';
import { EditComponent } from './DashBoard F/Car/edit-car/edit.component';
import { CarOperationsComponent } from './DashBoard F/Car/car-operations/car-operations.component';

import { AddbranchComponent } from './DashBoard F/Branch/add-branch/addbranch.component';
import { EditBranchComponent } from './DashBoard F/Branch/edit-branch/edit.component';
import { BranchOperationsComponent } from './DashBoard F/Branch/branch-operations/branch-operations.component';

import { AddDetailsComponent } from './DashBoard F/Details/add-details/add-details.component';
import { EditDetailsComponent } from './DashBoard F/Details/edit-details/edit-details.component';
import { DetailsOperationsComponent } from './DashBoard F/Details/details-operations/details-operations.component';

import { AddComponentPhoto } from './DashBoard F/Photoes/add-photoes/add.component';
import { PhotoOperationComponent } from './DashBoard F/Photoes/photo-operation/photo-operation.component';
import { DeletePhotoComponent } from './DashBoard F/Photoes/delete-photo/delete-photo.component';
//dashboard/cars/edit/1
const routes: Routes = [
  {path:"brands" ,component:BrandOperationsComponent},
  {path:"addbrand",component:AddBrandComponent},
  {path:"brands/edit/:id" ,component:EditBrandComponent},
 
  {path:"cars" ,component:CarOperationsComponent},
  {path:"addCar" ,component:AddCarComponent},
  {path:"cars/edit/:id" ,component:EditComponent},

  {path:"addbranch" ,component:AddbranchComponent},
  {path:"branches/edit/:id" ,component:EditBranchComponent},
  {path:"branches",component:BranchOperationsComponent},

  {path:"car/:id/photoes" ,component:AddComponentPhoto},
  {path:"addPhoto" ,component:AddComponentPhoto},
  {path:"photoes",component:PhotoOperationComponent},
  {path:"delete/:id",component:DeletePhotoComponent},

  {path:"details" ,component:DetailsOperationsComponent},
  {path:"addDetail" ,component:AddDetailsComponent},
  {path:"detail/edit/:id" ,component:EditDetailsComponent},
  
  {path:"" ,component:DashboardComponent},

];
@NgModule({
  declarations: [
    DashboardComponent,
    AddBrandComponent,
    EditBrandComponent,
    BrandOperationsComponent,
    AddCarComponent,
    EditComponent,
    CarOperationsComponent,
    AddbranchComponent,
    EditBranchComponent,
    BranchOperationsComponent,
    AddComponentPhoto,
    AddDetailsComponent,
    EditDetailsComponent,
    DetailsOperationsComponent,
    PhotoOperationComponent,
    DeletePhotoComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    SharedModulesModule
  ]
})
export class AdminModule { }
