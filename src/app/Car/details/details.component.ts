import { Component ,EventEmitter,OnChanges,OnInit, Output, SimpleChanges} from '@angular/core';
import { Car } from './../../../Models/Car';
import { BrandServicesService } from './../../Services/Brand/brand-services.service';
import { CarService } from './../../Services/Car/car.service';
import { Params,ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brand } from '../../../Models/Brand';
import AOS from 'aos';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {

  // @Output() newItemEvent = new EventEmitter<string>();
  // addNewItem(value: string) {
  //   this.newItemEvent.emit(value);
  // }
  constructor(private _ActivatedRoute:ActivatedRoute,private _Router:Router,private _CarService:CarService,private _BrandServicesService:BrandServicesService){}


  ngOnInit(): void {
    console.clear()
    AOS.init();

  }

} 
