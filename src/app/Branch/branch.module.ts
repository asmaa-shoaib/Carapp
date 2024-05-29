import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchItemComponent } from './branch-item/branch-item.component';
import { BranchesComponent } from './branches/branches.component';
import { SharedModulesModule } from '../Shared/shared-modules/shared-modules.module';

import { GoogleMapsModule } from '@angular/google-maps'

import { RouterModule,Routes } from '@angular/router';
import { ShowBranchesComponent } from './show-branches/show-branches.component';
const routes: Routes = [
  {path:"branchs" ,component:BranchesComponent},
  {path:"branch/:id" ,component:BranchItemComponent},
]
@NgModule({
  declarations: [
    BranchItemComponent,
    BranchesComponent,
    ShowBranchesComponent, 
    
  ],
  imports: [
    CommonModule,
    SharedModulesModule,
    [RouterModule.forChild(routes)],
    GoogleMapsModule
  ],
  exports:[BranchesComponent,ShowBranchesComponent]
  ,
  providers:[]
})
export class BranchModule { }
