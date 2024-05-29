import { BranchService } from './../../Services/Branch/branch.service';
import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Branch } from '../../../Models/Branch';

@Component({
  selector: 'app-branch-item',
  templateUrl: './branch-item.component.html',
  styleUrl: './branch-item.component.scss'
})
export class BranchItemComponent implements OnInit,OnChanges{
  @Input() ParamNum:number=1;
  BranchId:number=0;
  Branch!:Branch;
  constructor(private _BranchService:BranchService){}
  ngOnChanges(changes: SimpleChanges): void {
    this.GetBranch(this.ParamNum);
  }
  GetBranch(id:number){
    this._BranchService.GetBranch(id).subscribe(
      res=>{console.log(res);
      this.Branch=res
},
      err=>{console.log(err)}
    )
  }
 ngOnInit(): void {
  this.GetBranch(this.ParamNum);
 }


}
