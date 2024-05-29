import { Car,car } from './../../../../../Models/Car';
import { Photo } from './../../../../../Models/Photo';
import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../../Services/Car/car.service';
import { Detail } from '../../../../../Models/Detail';
import { Brand } from '../../../../../Models/Brand';
import { BrandServicesService } from '../../../../Services/Brand/brand-services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addCar',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddCarComponent implements OnInit{
    id:number=0;
    name:string="";
    color:string="";
    price:number=0;
    brand:Brand={id:0,name:"",imageUrl:""};
    bestSeller:boolean=false;
    //details:{id:0,description:"",modelYear:0,maxPower:0,torque:0,length:0,width:0,height:0,curbWeight:0,batteryEnergy:0,cltC_CruisingRange:0,maximumSspeed:0,cameras:0,acceleration:0,panoramic:"",carId:0};
    photoes:Photo[]=[];
    Brands:Brand[]=[];

constructor(private _CarService:CarService,private _Router:Router,private _BrandServicesService:BrandServicesService){}

CreateCar(name:string,color:string,price:string,brandId:number):car{
let p= parseInt(price);
let _car=new car();
_car={
  id:0,
  name:name,
  color:color,
  price:p,
  brandId:brandId,
  bestSeller:false
};
console.log(_car);
return _car;
}

GetBrand(id:number):any{
  let brand =new Brand();
  this._BrandServicesService.GetBrand(id).subscribe(
    res=>{
      console.log(res);
      brand=res;
      console.log(brand);
      return brand;
    },
    err=>{
      console.log(err);
      return brand;
    })
  return  0;
}

GetAllBrands(){
  this._BrandServicesService.GetAll().subscribe(
    res=>{
      console.log(res);
      this.Brands=res;
    },
    err=>{
      console.log(err);
    })
}


AddCar(name:string,color:string,price:string,brandId:string){
  let brandid= parseInt(brandId);
  let c= this.CreateCar(name,color,price,brandid);
  console.log(c);
  this._CarService.PostCar(c).subscribe(
    res=>{
      console.log(res);
      this._Router.navigateByUrl("/dashboard/cars");},
    err=>{console.log(err);})
}
ngOnInit(){
  this.GetAllBrands();
}

}
