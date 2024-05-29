import { Car, car } from '../../../../Models/Car';
import { CarService } from './../../../Services/Car/car.service';
import { Component,EventEmitter,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show-cars-on-home',
  templateUrl: './show-cars-on-home.component.html',
  styleUrl: './show-cars-on-home.component.scss'
})
export class ShowCarsOnHomeComponent implements OnInit {
//   @Output() selectedCarId=new EventEmitter<number>();
//   _selectedCarId!:number;
// selectCar(e:any){
//   this.selectedCarId.emit(e);
//   console.log(e)
//}
  constructor(private _CarService:CarService){}
  digit!:number[];
  length!:number;
  Cars:Car[]=[];
  RandomCars:Car[]=[];
  getCarSNumber(){
    this._CarService.GetAllCars().subscribe(
      res=>{
        this.Cars=res;
        this.length=res.length;
        for(let i =0;i<5;i++){
          this.RandomCars.unshift(this.Cars[this.getRand(this.Cars.length-1)])
        }
        console.log(this.RandomCars);
      },
      err=>{
        this.length=0;
        console.log(err);
      }
    )
    return 0;
  }
  getRand(d:number):number{
    let x=Math.random()*(this.length-1) ;
    x=parseInt(x.toFixed());
    return x;
  }


  ngOnInit(): void {
    this.getCarSNumber();
  }
}
