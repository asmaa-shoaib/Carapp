import { CarService } from './../../Services/Car/car.service';
import { Car } from './../../../Models/Car';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrl: './comparison.component.scss'
})
export class ComparisonComponent implements OnInit {
  constructor(private _CarService:CarService){
    
  }
  Cars:Car[]=[];
  car?:Car;
  id1:number=1;
  id2:number=17;
  car1!:Car;
  car2!:Car;
  
  GetAll(){
    this._CarService.GetAllCars().subscribe(
      res=>
      {
        console.log(res);
        this.Cars=res;
      }
      ,err=>{ console.log(err);})
  }
 ngOnInit(): void {
   this.GetAll();
 }
 getcar(id1:string, id2:string){
  this.id2=parseInt(id2);
  this.id1=parseInt(id1);
  this._CarService.GetCar(this.id1).subscribe(
    res=>{this.car1=res;
      console.log(this.car1);
    }
  );
  
  this._CarService.GetCar(this.id2).subscribe(
    res=>{this.car2=res;
    console.log(this.car2);
  }
  )
 }
}

