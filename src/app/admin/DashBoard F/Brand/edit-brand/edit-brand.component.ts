import { BrandServicesService } from './../../../../Services/Brand/brand-services.service';
import { Component, OnInit } from '@angular/core';
import { Brand } from '../../../../../Models/Brand';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrl: './edit-brand.component.scss'
})
export class EditBrandComponent implements OnInit {
BrandId:number=0;
fileName = '';
imageUrl:any="";
Brand:Brand={id:0,name:"",imageUrl:""}
form!:FormGroup;
  constructor(private _BrandServicesService:BrandServicesService,private _ActivatedRoute:ActivatedRoute,private _FormBuilder:FormBuilder){}
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
  GetID():number{
    let x;
    this._ActivatedRoute.paramMap.subscribe(
      res=>{
        x=res.get('id');
        if(x){
          this.BrandId=+x;
          return this.BrandId
        }else{
          return 0;
        }
      }
      ,err=>{console.log(err)
      return this.BrandId;}
    )
    return this.BrandId;
  }
  GetBrand(id:number){
    this._BrandServicesService.GetBrand(id).subscribe(
      res=>{
        this.Brand=res;
        console.log(this.Brand);
        this.showBrand(this.Brand)
        return(this.Brand)
      },err=>{
        console.log(err);
      }
    )
  }
  Validation(){
    this.form=this._FormBuilder.group({
      name:[null,[Validators.required]],
      imageUrl:[null,[Validators.required]]
    })
  }
  showBrand(data:Brand){
    this.form.patchValue({
    name:data.name,
    imageUrl:data.imageUrl
    })
  }
  EditBrand(){
    this.Brand={
      id:this.BrandId,
      name:this.form.controls['name'].value,
      imageUrl:this.Brand.imageUrl
    }
    console.log(this.Brand);
    this._BrandServicesService.Update(this.BrandId,this.Brand).subscribe(
      res=>{console.log(res)}
      ,err=>{console.log(err)}
    )
  }

  ngOnInit(): void {
    this.GetID();
    this.Validation();
   this.GetBrand(this.GetID());
   
  }
}
