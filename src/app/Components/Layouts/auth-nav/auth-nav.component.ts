import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../Services/User-service/user-service.service';
@Component({
  selector: 'app-auth-nav',
  templateUrl: './auth-nav.component.html',
  styleUrl: './auth-nav.component.scss'
})
export class AuthNavComponent implements OnInit {
  constructor(private UserServiceService:UserServiceService){
  
  }
  isLogged:boolean=false; 
  ngOnInit(): void {
      // this.UserServiceService.getLoggedStutas().subscribe(
      //   res=>{
      //     console.log(res);
      //     this.isLogged=res;
      //   },
      //   err=>{
      //     this.isLogged=false;
      //   });
    }
  }
