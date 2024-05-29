import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandServicesService } from '../../../../../Services/Brand/brand-services.service';
import { Component, OnInit } from '@angular/core';
import { Brand } from './../../../../../../Models/Brand'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrl: './add-brand.component.scss'
})
export class  AddBrandComponent implements OnInit
{
  constructor(private _Router:Router,private _BrandServicesService:BrandServicesService,private _FormBuilder:FormBuilder){}

  fileName = '';
  imageUrl:any="";
  Brand:Brand={id:0,name:"",imageUrl:""}
  form!:FormGroup;
  onFileSelected(event:any){
  const file:File = event.target.files[0];
  if (file)
  {  
    this.fileName = file.name;
    const formData = new FormData();
    formData.append("image", file);
    const upload$ = this._BrandServicesService.PostBrandImage(formData);
    upload$.subscribe(res=>{
      console.log(res);
      let x;
      x=res;
      if(x){
      this.imageUrl=x;
      this.Brand.imageUrl=this.imageUrl['item2'];  
      }
    });
  }
  }
  Validation(){
    this.form=this._FormBuilder.group({
      name:['',Validators.required]
    })
  }
  CreateBrand():Brand{
    this.Brand={
      id:0,
      name:this.form.controls['name'].value,
      imageUrl:this.imageUrl['item2']
    }
    console.log(this.Brand);
    return this.Brand;
  }
  AddBrand(){
    this._BrandServicesService.PostBrand(this.CreateBrand()).subscribe(
      res=>{
        console.log(res);
        this._Router.navigateByUrl("/dashboard/brands");
      }
      ,err=>{console.log(err)}
    )
  }
  ngOnInit(): void {
    this.Validation();    
  }
}
