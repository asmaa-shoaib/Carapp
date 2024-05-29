import { BranchService } from './../../../../Services/Branch/branch.service';
import { Branch } from '../../../../../Models/Branch';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-operations',
  templateUrl: './branch-operations.component.html',
  styleUrl: './branch-operations.component.scss'
})
export class BranchOperationsComponent implements OnInit{
  Branches:Branch[]=[];
  constructor(private _BranchService:BranchService){}
  GetAllBranches(){
    this._BranchService.GetAllBranch().subscribe(
      res=>{
        console.log(res);
        this.Branches=res;
        console.log(this.Branches);
      },err=>{
        console.log(err);
      }
    )
  }
  
  ngOnInit():void{
    this.GetAllBranches();
  }
}
