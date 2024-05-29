import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarService } from './../../Services/Car/car.service';
import { Car, car } from './../../../Models/Car';
import { UserServiceService } from '../../Services/User-service/user-service.service';
import { Observable, retry } from 'rxjs';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})
export class CarsComponent implements OnInit{
  constructor(private _CarService:CarService,private UserServiceService:UserServiceService){}
  Cars:Car[]=[];
GetAllCar(){
  this._CarService.GetAllCars().subscribe(
    res=>
    {
      console.log(res);
      this.Cars=res;
     // this.Cars=this.sortByPrice(this.Cars)
      console.log(this.Cars)
    },
    err=>{console.log(err);}
  )
}
GetCar(id:number){
  this._CarService.GetCar(id).subscribe(
    res=>{console.log(res);},
    err=>{console.log(err);}
  )
}

PutCar(car:Car,id:number){
  this._CarService.PutCar(car,id).subscribe(
    res=>{console.log(res);},
    err=>{console.log(err);}
  )
}
DeleteCar(id:number){
  this._CarService.DeleteCar(id).subscribe(
    res=>{console.log(res);},
    err=>{console.log(err);}
  )
}

asyndPrice:boolean=false;

asyndAlpha:boolean=false;
sortByPrice(){
  if(this.asyndPrice){
    this.asyndPrice=!this.asyndPrice;
    console.log(this.asyndPrice);
    this.Cars= this.Cars.sort(function(a,b){
      return a.price-b.price;}
    )
  }
  else{
    this.asyndPrice=!this.asyndPrice;
    console.log(this.asyndPrice);
    this.Cars= this.Cars.sort(function(a,b){
      return b.price-a.price;}
  )
}
  return  this.Cars;
}
sortByName(){
  if(this.asyndAlpha){
    this.asyndAlpha=!this.asyndAlpha;
    console.log(this.asyndAlpha);
  this.Cars= this.Cars.sort((a,b)=>a.details.description.localeCompare(b.details.description))}
  else{
    this.asyndAlpha=!this.asyndAlpha;
    console.log(this.asyndAlpha);

  this.Cars= this.Cars.sort((a,b)=>b.details.description.localeCompare(a.details.description))}
  return  this.Cars;
}
ngOnInit(): void {
  this.GetAllCar();
}
}
