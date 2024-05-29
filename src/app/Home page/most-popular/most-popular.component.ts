import { Component, OnInit } from '@angular/core';
import { CarService } from '../../Services/Car/car.service';
import { Car } from '../../../Models/Car';
import AOS from 'aos';
@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrl: './most-popular.component.scss'
})
export class MostPopularComponent implements OnInit{
  mostPopularCars:Car[]=[];
  Cars:Car[]=[];
  constructor(private _carService:CarService){}

  GetBestSellerCars(){
    return this._carService.GetBestSellerCars().subscribe(
      res=>{
        this.mostPopularCars=res;
      },err=>{
        this.mostPopularCars=[];
      }
    );
  }
  ngOnInit(): void {
    this.GetBestSellerCars();
    AOS.init();
  }
}
