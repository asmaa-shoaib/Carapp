import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Detail } from '../../../../../Models/Detail';
import { CarService } from '../../../../Services/Car/car.service';
import { DetailService } from '../../../../Services/Detail/detail.service';
import { car } from '../../../../../Models/Car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrl: './add-details.component.scss'
})
export class AddDetailsComponent implements OnInit{
DetailObject!:FormGroup;
cars:car[]=[];
Detail!:Detail;
constructor(private _FormBuilder:FormBuilder,private _Router:Router,private _carService:CarService,private _detailService:DetailService){}
  GetAllCars(){
    this._carService.GetAllCars().subscribe(
      res=>{this.cars=res;}
      ,err=>{this.cars=[]}
    ) 
  }
  createDetail(carId:string):Detail{
    let carid=parseInt(carId);
    let detail={
      id:0,
      description:this.DetailObject.controls["description"].value,
      modelYear:this.DetailObject.controls["modelYear"].value,
      maxPower:this.DetailObject.controls["maxPower"].value,
      torque:this.DetailObject.controls["torque"].value,
      length:this.DetailObject.controls["length"].value,
      width:this.DetailObject.controls["width"].value,
      height:this.DetailObject.controls["height"].value,
      curbWeight:this.DetailObject.controls["curbWeight"].value,
      batteryEnergy:this.DetailObject.controls["batteryEnergy"].value,
      cltC_CruisingRange:this.DetailObject.controls["cltC_CruisingRange"].value,
      maximumSspeed:this.DetailObject.controls["maximumSspeed"].value,
      cameras:this.DetailObject.controls["cameras"].value,
      acceleration:this.DetailObject.controls["acceleration"].value,
      panoramic:this.DetailObject.controls["panoramic"].value,
      carId:carid
    }
    this.Detail=detail;
    return this.Detail;
  }
  AddDetail(carId:string){
    console.log(this.createDetail(carId));
    let newDetail=this.createDetail(carId);
    this._detailService.PostDetail(newDetail).subscribe(
      res=>{console.log(res);
        this._Router.navigateByUrl("/dashboard/details");},
      err=>{console.log(err);}
    )
  }
  
  DetailsValidation(){
    this.DetailObject=this._FormBuilder.group({
    description:[null,Validators.required],
    modelYear:[null,Validators.required],
    maxPower:[null,[Validators.required]],
    torque:[null,[Validators.required]],
    length:[null,[Validators.required]],
    width:[null,Validators.required],
    height:[null,Validators.required],
    curbWeight:[null,[Validators.required]],
    batteryEnergy:[null,[Validators.required]],
    cltC_CruisingRange:[null,[Validators.required]],
    maximumSspeed:[null,Validators.required],
    cameras:[null,[Validators.required]],
    acceleration:[null,[Validators.required]],
    panoramic:[null,[Validators.required]],
    carId:[null,[Validators.required]]
    })
    console.log(this.DetailObject);
  }

 
  ngOnInit(): void {
    this.GetAllCars();
    this.DetailsValidation();
  }
  }
