import { UserServiceService } from './../../../Services/User-service/user-service.service';
import { Router } from '@angular/router';
import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit{


  constructor(private UserServiceService:UserServiceService,private _Router:Router){}
  Logout(){
    this.UserServiceService.logout();
  }


  ngOnInit(): void {
    this.Logout();
    this._Router.navigateByUrl("/admin/login")
    
  }
}


