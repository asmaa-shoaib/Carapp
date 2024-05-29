import { Component, OnInit } from '@angular/core';
import { Detail } from '../../../../Models/Detail';
import { DetailService } from '../../../Services/Detail/detail.service';
import { Car } from '../../../../Models/Car';
import { CarService } from '../../../Services/Car/car.service';
import AOS from 'aos';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent  implements OnInit{
  
  Cars:Car[]=[];
  
  isloading:boolean=false;
  car!:Car;
  searchValue:string="";
  constructor(private _CarService:CarService,private _DetailService:DetailService){}
  GetAllCars(){
    this._CarService.GetAllCars().subscribe(
      res=>{this.Cars=res;
        this.isloading=true;
    //  console.log(this.Cars);
      }
      ,err=>{this.Cars=[];}
    )
  } 
  ngOnInit(): void {
    this.GetAllCars();
    AOS.init();
  }
}

