import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BranchService } from './../../../../Services/Branch/branch.service';
import { Branch } from '../../../../../Models/Branch';
import { FormBuilder,FormGroup, Validators  } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditBranchComponent implements OnInit{
  BranchId:number=0;
  branch:Branch={id:0,governoment:"",name:"",location:"",lat:0,lng:0,mobile:0,phone1:0,phone2:0}
  formData !:Branch;
  myGroup!:FormGroup;
  constructor (private _ActivatedRoute:ActivatedRoute,private _Router:Router,private _BranchService:BranchService,private _FormBuilder:FormBuilder){}

  GetParam():number{
    let x
    this._ActivatedRoute.paramMap.subscribe(res=>{
      res.get('id');
      x=res.get('id');
      if(x!=null)
      {
        this.BranchId=+x;
        return this.BranchId;
      }else{
        return 0;
      }
    },err=>{
      console.log(err);
    })

    return this.BranchId;
  }
  GetBranch(id:number):any{
    this._BranchService.GetBranch(id).subscribe(res=>{
      this.branch=res;
      this.ShowBranch(this.branch)
      return this.branch
    },err=>{
      console.log(err);
    })
  }

   ShowBranch(data:Branch){
    this.formData=data;
    this.myGroup.patchValue({
      name:data.name,
      governoment:data.governoment,
      location:data.location,
      mobile:data.mobile,
      phone1:data.phone1,
      phone2:data.phone2
    })

  }

  EditBrunch(){
    this.branch={
      id:this.BranchId,
      governoment:this.myGroup.controls['governoment'].value,
      name:this.myGroup.controls['name'].value,
      location:this.myGroup.controls['location'].value,
      mobile:this.myGroup.controls['mobile'].value,
      phone1:this.myGroup.controls['phone1'].value,
      phone2:this.myGroup.controls['phone2'].value,
      lat:0,lng:0
    }
    this._BranchService.PutBranch(this.BranchId,this.branch).subscribe(
      res=>{
        console.log("done");
        this._Router.navigateByUrl("/dashboard/branches");
    }
      ,err=>{console.log(err);}
    )
  }
  Validate(){
    this.myGroup=this._FormBuilder.group({
      name:[null,Validators.required],
      governoment:[null,Validators.required],
      location:[null,Validators.required],
      mobile:[null,[Validators.required,,Validators.pattern("[0-9]{11}")]],
      phone1:[null,[Validators.required,Validators.pattern("[0-9]{11}")]],
      phone2:[,[Validators.maxLength(11),Validators.pattern("[0-9]{10}")]]
    })

  }


  ngOnInit(): void {
    this.Validate()
    this.branch=this.GetBranch(this.GetParam());

  }
}
