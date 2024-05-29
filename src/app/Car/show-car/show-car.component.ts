import { Component ,Input,OnChanges,OnInit, SimpleChanges} from '@angular/core';
import { Car } from './../../../Models/Car';
import { BrandServicesService } from './../../Services/Brand/brand-services.service';
import { CarService } from './../../Services/Car/car.service';
import { Params,ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brand } from '../../../Models/Brand';
import AOS from 'aos';

@Component({
  selector: 'app-show-car',
  templateUrl: './show-car.component.html',
  styleUrl: './show-car.component.scss'
})
export class ShowCarComponent implements OnInit ,OnChanges{
  @Input() ParamNum!:number;
  CarId:number=0;
  car:any;
  Brands:Brand[]=[];
  car2!:Car;
  constructor(private _ActivatedRoute:ActivatedRoute,private _Router:Router,private _CarService:CarService,private _BrandServicesService:BrandServicesService){}
  ngOnChanges(changes: SimpleChanges): void {
   this.car=this.ParamNum;
    console.log(this.car);
  }
  GetCarByPAram(param:number){
    console.log(param)
    this._CarService.GetCar(param).subscribe(
      res=>{console.log(res);},
      err=>{this._Router.navigateByUrl('error')}
    )
  }
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
      }
      ,err=>{console.log(err);

        this._Router.navigateByUrl("/notfound");
      }
    )
  }
  ngOnInit(): void {
    console.clear()
    AOS.init();
    this.GetCar(this.GetID());
   // this.GetCarByPAram(this.ParamNum);
  }

}
