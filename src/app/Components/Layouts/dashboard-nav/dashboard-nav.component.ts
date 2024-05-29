import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../Services/User-service/user-service.service';
@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrl: './dashboard-nav.component.scss'
})
export class DashboardNavComponent implements OnInit {
  constructor(private UserServiceService:UserServiceService){
   
  }
  isLogged :boolean=false ; 
  ngOnInit(): void {
    //console.log(this.UserServiceService.islogged());
    this.isLogged=this.UserServiceService.is_logged();
    //console.log(this.UserServiceService.is_logged());
    //console.log(this.isLogged);
    }
  }
