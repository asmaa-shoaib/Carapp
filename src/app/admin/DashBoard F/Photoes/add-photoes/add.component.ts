import { CarOperationsComponent } from './../../Car/car-operations/car-operations.component';
import { Car } from './../../../../../Models/Car';
import { Photo } from './../../../../../Models/Photo';
import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../../Services/Car/car.service';
import { PhotoService } from '../../../../Services/Photo/photo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponentPhoto implements OnInit {
  Photo:Photo={url:"",id:0,carId:0}
  Cars:Car[]=[];
  fileName = '';
  imageUrl={item1:0,item2:""};
  //{item1:0,item2:""};
  constructor(private _Router:Router,private _CarService:CarService,private _photoService:PhotoService){}
  GetAllCars(){
      this._CarService.GetAllCars().subscribe(
        res=>
        {
          console.log(res);
          this.Cars=res;
        }
        ,err=>{ console.log(err);})
  }
  onFileSelected(event:any){
    const file:File=event.target.files[0];
    if(file){
      this.fileName=file.name;
      const formData=new FormData();
      formData.append("image",file);
      const upload =this._photoService.PostPhotoImage(formData);
      upload.subscribe(
        res=>{
          console.log(res);
          let x;
          x=res;
          if(x){
            this.imageUrl=x;
            console.log(this.imageUrl);
          }
        }
      )
    }
  }
  CreatePhoto(_carId:number):Photo{
    this.Photo={
      id:0,
      url:this.imageUrl["item2"],
      carId:_carId
    }
    console.log(this.Photo);
    return this.Photo;
  }

  AddPhoto(_carId:string){
    let carId= parseInt(_carId);
    console.log(carId);
    console.log((this.CreatePhoto(carId)));
    this._photoService.AddPhoto(this.CreatePhoto(carId)).subscribe(
      res=>{
        console.log(res);
        this._Router.navigateByUrl("/dashboard/photo");
      }
      ,err=>{
        console.log(err);
      }
    )
  }
  ngOnInit(): void {
    console.log("from add");
    this.GetAllCars();
  }
}
