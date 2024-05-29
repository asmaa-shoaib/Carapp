import { UserServiceService } from './../../../Services/User-service/user-service.service';
import { Router } from '@angular/router';
import { Component,OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../../Models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  
  isLogged:boolean=false; 
  loginForm!:FormGroup;
  User:User={email:"",password:""};
  alert_error!:boolean;

  constructor(private _Router:Router,private UserServiceService:UserServiceService,private _FormBuilder:FormBuilder){
    if(this.UserServiceService.is_logged()){
      this._Router.navigateByUrl("/home");
    }
  }
  createUser(){
    this.User=
    {email:this.loginForm.controls['email'].value,
    password:this.loginForm.controls['password'].value,
    } 
  }
  show(){
    this.loginForm.patchValue({
      email:"",
      password:""
    })
  }
  Login(){
    this.createUser(); 
    this.UserServiceService.login(this.User).subscribe(
      res=>{  
        localStorage.setItem("token",res.token);
        this._Router.navigateByUrl("/dashboard");
      }
      ,err=>{
        console.log(err);
        this.show();
        this.alert_error=true
        this._Router.navigateByUrl("/admin/login")}
    )
  }
  Validation(){
    this.loginForm=this._FormBuilder.group({
      email:['',[Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
      password:['',[Validators.required]],
    })
  }
  ngOnInit(): void {
    this.Validation(); 
  }
}

