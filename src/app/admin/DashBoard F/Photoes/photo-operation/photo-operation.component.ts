import { Component, OnInit } from '@angular/core';
import { Photo } from '../../../../../Models/Photo';
import { Car } from '../../../../../Models/Car';
import { CarService } from '../../../../Services/Car/car.service';
import { PhotoService } from '../../../../Services/Photo/photo.service';
@Component({
  selector: 'app-photo-operation',
  templateUrl: './photo-operation.component.html',
  styleUrl: './photo-operation.component.scss'
})
export class PhotoOperationComponent implements OnInit{
  Cars:Car[]=[];
  constructor(private _carService:CarService,private _PhotoService:PhotoService){}
  GetAllcar(){
    this._carService.GetAllCars().subscribe(
      res=>
      {
        console.log(res);
        this.Cars=res;
        console.log(this.Cars)
      },
      err=>{console.log(err);}
    )
  }

  delete(id:number){
    this._PhotoService.DeletPhoto(id).subscribe(
      res=>
      {
        console.log(res);
        console.log(this.Cars)
      },
      err=>{console.log(err);} 
    )
  }
  ngOnInit(): void {
   this.GetAllcar(); 
  }
}
