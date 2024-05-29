import { Component , OnChanges, OnInit } from '@angular/core';
import AOS from 'aos';
import { BranchService } from '../../Services/Branch/branch.service';
import { Branch } from '../../../Models/Branch';

@Component({
  selector: 'app-show-branches',
  templateUrl: './show-branches.component.html',
  styleUrl: './show-branches.component.scss'
})
export class ShowBranchesComponent implements OnInit{
   
  Branches:Branch[]=[];
  branch!:Branch;
  staticbranch!:Branch;
  constructor(private _BranchService:BranchService){}
  GetAllBranches(){
    this._BranchService.GetAllBranch().subscribe(res=>{
      this.Branches=res;
      console.log(this.Branches);
    },err=>{console.log(err)})
  }
  GetBranch(id:number){
    this._BranchService.GetBranch(id).subscribe(
      res=>{this.branch=res;},
      err=>{console.log(err);}
    )
  }
  showBranch(id:number){
    this.GetBranch(id);
  }
  ngOnInit(): void {
    this.GetAllBranches();
   // this.GetBranch(1) ;
    AOS.init();
  }

}
