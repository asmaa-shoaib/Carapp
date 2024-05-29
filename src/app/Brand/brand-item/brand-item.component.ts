import { CarService } from './../../Services/Car/car.service';
import { BrandServicesService } from './../../Services/Brand/brand-services.service';
import { Car, car } from './../../../Models/Car';
import { Component ,OnInit} from '@angular/core';
import { Params,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brand} from '../../../Models/Brand';

@Component({
  selector: 'app-brand-item',
  templateUrl: './brand-item.component.html',
  styleUrl: './brand-item.component.scss'
})
export class BrandItemComponent {
  [x: string]: any;

}
