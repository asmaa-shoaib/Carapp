import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { LayoutsModule } from './../../Components/Layouts/layouts.module';

import { CarItemComponent } from '../component/car-item/car-item.component';
import { CardComponent } from '../component/card/card.component';
import { ShowCarsOnHomeComponent}from '../component/show-cars-on-home/show-cars-on-home.component';
import { SearchBarComponent } from '../component/search-bar/search-bar.component';
import { SearchPipe } from './../../Pipe/search.pipe';
@NgModule({    
  declarations: [
    CarItemComponent,
    CardComponent,
    SearchBarComponent,
    ShowCarsOnHomeComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    LayoutsModule,
    CarItemComponent,
    CardComponent,
    ShowCarsOnHomeComponent,
    SearchBarComponent    
  ],
})   
export class SharedModulesModule { }
