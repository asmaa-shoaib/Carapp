import { Detail } from './../../../../../Models/Detail';
import { Component, OnInit } from '@angular/core';
import { DetailService } from '../../../../Services/Detail/detail.service';

@Component({
  selector: 'app-details-operations',
  templateUrl: './details-operations.component.html',
  styleUrl: './details-operations.component.scss'
})
export class DetailsOperationsComponent implements OnInit{

  Details:Detail[]=[];
  
  constructor(private _DetailService:DetailService){}
  GetAllDetails(){
    this._DetailService.GetAll().subscribe(
      res=>{this.Details=res;
      console.log(this.Details);
      }
      ,err=>{this.Details=[];}
    )
  }

  ngOnInit(): void {
    this.GetAllDetails();
  }
}
