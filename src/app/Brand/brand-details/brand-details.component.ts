import { Component ,OnInit} from '@angular/core';
import { Car } from './../../../Models/Car';
import { BrandServicesService } from './../../Services/Brand/brand-services.service';
import { CarService } from './../../Services/Car/car.service';
import { Params,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brand } from '../../../Models/Brand';
 
@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrl: './brand-details.component.scss'
})
export class BrandDetailsComponent  implements OnInit {
  BrandId:number=0;
  Brand:any;
  Cars:Car[]=[];
  constructor(private _ActivatedRoute:ActivatedRoute,private _CarService:CarService,private _BrandServicesService:BrandServicesService){}
  GetID():number{
    let x;
    this._ActivatedRoute.paramMap.subscribe(
      res=>{
        x=res.get('id');
        if(x){
          this.BrandId=+x;
          console.log(this.BrandId);
          this.getCarInBrand();
          return this.BrandId;
        }
        else{
          return 0;
        }
      }
      ,err=>{console.log(err);}
    )
    return this.BrandId;
  }
  GetBrand(id:number){
    this._BrandServicesService.GetBrand(id).subscribe(
      res=>{
        console.log(res)
        this.Brand=res;
        console.log(this.Brand);
      }
      ,err=>{console.log(err);}
    )
  }

  getCarInBrand(){
      this._BrandServicesService.GetBrandCars(this.BrandId).subscribe(
        res=>{
          console.log(res)
          this.Cars=res;
          console.log(this.Cars);
        }
        ,err=>{console.log(err);}
      ) 
  }
  ngOnInit(): void {
    this.GetBrand(this.GetID());
  }
}