import { Component, OnInit} from '@angular/core';
import { BrandServicesService } from '../../Services/Brand/brand-services.service';
import { Brand } from '../../../Models/Brand';
import AOS from 'aos';
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss',
})
export class BrandsComponent implements OnInit {
  constructor(private _BrandServicesService:BrandServicesService){
  }
  Brands:Brand[]=[];
  FirstArr:Brand[]=[];
  SecondArr:Brand[]=[];
GetAllBrands(){
  this._BrandServicesService.GetAll().subscribe(
    res=>{
  //    console.log(res);
      this.Brands=res;
      this.FirstArr=this.Brands.slice(0,this.Brands.length/2);
      this.SecondArr=this.Brands.slice(this.Brands.length/2,this.Brands.length );
    },
    err=>{
//      console.log(err);
    }
  )
}
  
 

  ngOnInit(): void {  

    this.GetAllBrands();
    AOS.init();
}


}
