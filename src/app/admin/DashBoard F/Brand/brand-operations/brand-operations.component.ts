import { BrandServicesService } from './../../../../Services/Brand/brand-services.service';
import { Brand } from '../../../../../Models/Brand';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-operations',
  templateUrl: './brand-operations.component.html',
  styleUrl: './brand-operations.component.scss'
})
export class BrandOperationsComponent implements OnInit {
  brands:Brand[]=[]
  constructor(private _BrandServicesService:BrandServicesService){}
  GetAll(){
    this._BrandServicesService.GetAll().subscribe(
      res=>{this.brands=res}
      ,err=>{console.log(err)}
    )
  }
  ngOnInit(): void {
    this.GetAll()
  }
}
 