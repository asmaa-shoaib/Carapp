import { BranchService } from '../../../../Services/Branch/branch.service';
import { Component, OnInit } from '@angular/core';
import { Branch } from '../../../../../Models/Branch';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addbranch',
  templateUrl: './addbranch.component.html',
  styleUrl: './addbranch.component.scss'
})
export class AddbranchComponent implements OnInit {

  branch:Branch={id:0,governoment:"", name:"",location:"",lat:0,lng:0,mobile:0,phone1:0,phone2:0}

  constructor(private _BranchService:BranchService,private _Router:Router,private _FormBuilder:FormBuilder){}

  CreateBranch():Branch{
    let branch:Branch={
      id:0,
      name:this.myGroup.controls['name'].value,
      governoment:this.myGroup.controls['governoment'].value,
      location:this.myGroup.controls['location'].value,
      mobile:this.myGroup.controls['mobile'].value,
      phone1:this.myGroup.controls['phone1'].value,
      phone2:this.myGroup.controls['phone2'].value,
      lat:0,lng:0
    }
    this.branch=branch;
    console.log(this.branch);
    return this.branch;
  }
  myGroup!:FormGroup;
  AddBranch(){
    this.branch=this.CreateBranch();
    console.log(this.branch);
    this.Add(this.branch);
    console.log(this.branch);
   
  }
  Add(b:Branch){
    this._BranchService.PostBranch(b).subscribe(res=>{
      console.log(res);  
      this._Router.navigateByUrl("/dashboard/branches");  
    },
    err=>{
      console.log(err);
    })
  }
  Validate(){
    this.myGroup=this._FormBuilder.group({
        name:[null,Validators.required],
        governoment:[null,Validators.required],
        location:[null,Validators.required],
        mobile:[null,[Validators.required,,Validators.pattern("[0-9 ]{11}")]],
        phone1:[null,[Validators.required,Validators.pattern("[0-9 ]{11}")]],
        phone2:[,[Validators.maxLength(11),Validators.pattern("[0-9 ]{10}")]]
    })
    console.log(this.myGroup);
  }
  check(){
    console.log(this.myGroup.controls['name'].value)
  }
  ngOnInit(): void {
   this.Validate();
}
}
