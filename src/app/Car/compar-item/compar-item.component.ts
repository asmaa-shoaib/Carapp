import { CarService } from './../../Services/Car/car.service';
import { Car } from './../../../Models/Car';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-compar-item',
  templateUrl: './compar-item.component.html',
  styleUrl: './compar-item.component.scss'
}) 
export class ComparItemComponent implements OnInit , OnChanges {
  @Input() ParamNum!:Car;
  car?:Car;
  constructor(private _CarService:CarService){}
  ngOnChanges(changes: SimpleChanges): void {
    this.GetCar(); 
  }
  ngOnInit(): void {
    this.GetCar();
  }
  GetCar(){
    this.car=this.ParamNum;
    console.log(this.car);
  }
}

