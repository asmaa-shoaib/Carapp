import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Detail } from '../../../../../Models/Detail';
import { CarService } from '../../../../Services/Car/car.service';
import { DetailService } from '../../../../Services/Detail/detail.service';
import { car } from '../../../../../Models/Car';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrl: './edit-details.component.scss'
})
export class EditDetailsComponent implements OnInit{
  DetailObject!:FormGroup;
  detailId:number=0;
  cars:car[]=[];
  detail!:Detail;
  constructor(private _FormBuilder:FormBuilder,private _ActivatedRoute:ActivatedRoute,private _Router:Router,private _CarService:CarService,private _detailService:DetailService){}
  GetAllCars(){
    this._CarService.GetAllCars().subscribe(
      res=>{this.cars=res;}
      ,err=>{this.cars=[]}
    ) 
  }
  GetID():number{
    let x;
    this._ActivatedRoute.paramMap.subscribe(
      res=>{
        x=res.get('id');
        if(x){
          this.detailId=+x;
          console.log(this.detailId);
          return this.detailId;
        }
        else{
          return 0;
        }
      }
      ,err=>{console.log(err);}
    )
    return this.detailId;
  }
  GetDetail(id:number){
    this._detailService.GetItem(id).subscribe(
      res=>{
        console.log(res)
        this.detail=res;
        console.log(this.detail);
        this.showDetail(this.detail);
         }
      ,err=>{console.log(err);
      }
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
  showDetail(detail:Detail){
    this.DetailObject.patchValue({
      id:this.detailId,
      description:detail.description,
      modelYear:detail.modelYear,
      maxPower:detail.maxPower,
      torque:detail.torque,
      length:detail.length,
      width:detail.width,
      height:detail.height,
      curbWeight:detail.curbWeight,
      batteryEnergy:detail.batteryEnergy,
      cltC_CruisingRange:detail.cltC_CruisingRange,
      maximumSspeed:detail.maximumSspeed,
      cameras:detail.cameras,
      acceleration:detail.acceleration,
      panoramic:detail.panoramic,
      carId:detail.carId
    })
  }
  EditDetail(carId:string){
    console.log(this.detail);
    let carid=parseInt(carId);
    this.detail={
      id:this.detailId,
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
    console.log(this.detail);
    this._detailService.EditDetail(this.detail,this.detailId).subscribe(
      res=>{
        console.log(res);
        this._Router.navigateByUrl("/dashboard/details");
      }
      ,err=>{console.log(err);
      
    console.log(this.detail);}
    )
  }
  ngOnInit(): void {  
    this.GetDetail(this.GetID());  
    this.GetAllCars();
    this.DetailsValidation();
  }
}
