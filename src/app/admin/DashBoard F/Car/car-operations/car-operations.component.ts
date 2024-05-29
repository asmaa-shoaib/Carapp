import { CarService } from './../../../../Services/Car/car.service';
import { Car } from './../../../../../Models/Car';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-car-operations', 
  templateUrl: './car-operations.component.html',
  styleUrl: './car-operations.component.scss'
})
export class CarOperationsComponent implements OnInit {
  constructor(private _CarService:CarService){
    
  }
  Cars:Car[]=[];
  //Get allcars in table
  GetAll(){
    this._CarService.GetAllCars().subscribe(
      res=>
      {
        console.log(res);
        this.Cars=res;
      }
      ,err=>{ console.log(err);})
  }
  //insert Car
  //Edit Car
  //Change Car Status
 ngOnInit(): void {
   this.GetAll();
 }
}

