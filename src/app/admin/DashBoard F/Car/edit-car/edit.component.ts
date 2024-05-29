import { Car } from './../../../../../Models/Car';
import { BrandServicesService } from './../../../../Services/Brand/brand-services.service';
import { CarService } from './../../../../Services/Car/car.service';
import { Component, OnInit } from '@angular/core';
import { Params,ActivatedRoute } from '@angular/router';
import { car } from '../../../../../Models/Car';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brand } from '../../../../../Models/Brand';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit{
CarId:number=0;
car:any ;
form!:FormGroup;
Brands:Brand[]=[]; 
constructor(private _ActivatedRoute:ActivatedRoute,private _Router:Router,private _FormBuilder:FormBuilder,private _CarService:CarService,private _BrandServicesService:BrandServicesService){}
  GetID():number{
    let x;
    this._ActivatedRoute.paramMap.subscribe(
      res=>{
        x=res.get('id');
        if(x){
          this.CarId=+x;
          console.log(this.CarId);
          return this.CarId;
        }
        else{
          return 0;
        }
      }
      ,err=>{console.log(err);}
    )
    return this.CarId;
  }
  GetCar(id:number){
    this._CarService.GetCar(id).subscribe(
      res=>{
        console.log(res)
        this.car=res;
        console.log(this.car);
        this.showCar(this.car);
      }
      ,err=>{console.log(err);}
    )
  }
  Validation(){
    this.form=this._FormBuilder.group({
      name:['',[Validators.required]],
      price:['',[Validators.required]],
      color:['',[Validators.required]],
      brandId:['',[Validators.required]],
      bestSeller:[Boolean, [Validators.required]] 
    })
  }
  GetAllBrands(){
    this._BrandServicesService.GetAll().subscribe(
      res=>{this.Brands=res;}
      ,err=>{console.log(err);}
    )
  }
  onChangeBestSeller($event:any){
    let val = $event.target.checked ? 'true' : 'false';
    this.form.patchValue({bestseller:val});
  }
  showCar(car:car){
    this.form.patchValue({
      name:car.name,
      price:car.price,
      color:car.color,
      brandId:car.brandId,
      bestSeller:car.bestSeller
    })
  }
  EditCar(){
    console.log(this.car);
    this.car={
      id:this.CarId,
      name:this.form.controls['name'].value,
      price:this.form.controls['price'].value,
      color:this.form.controls['color'].value,
      brandId:this.form.controls['brandId'].value,
      bestSeller:this.form.controls['bestSeller'].value 
    }
    console.log(this.car);
    
    this._CarService.PutCar(this.car,this.CarId).subscribe(
      res=>{
        console.log(res);
        this._Router.navigateByUrl("/dashboard/cars");
      }
      ,err=>{console.log(err)}
    )
  }
  ngOnInit(): void {
  this.GetCar(this.GetID());
  this.GetAllBrands();
  this.Validation();
  }

}
