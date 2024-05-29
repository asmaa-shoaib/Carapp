import { Router } from '@angular/router';
import { UserServiceService } from '../../../Services/User-service/user-service.service';
import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  isLogged :boolean=false ;
  ActiveLink:string='';
constructor(private UserServiceService:UserServiceService,private _Router:Router){
}
@HostListener("document:scroll")
changeNavStyle(){
  let x=this._Router.url;
  console.log(x);

  if(document.body.scrollTop>0 || document.documentElement.scrollTop>0){
    this.scroll=true;
  }else{

    this.scroll=false;
  }
  if(!x.includes('home')){
    this.scroll=true;
  }
}
scroll:boolean=false;

gotoThis(frigmant:any){
  console.log(frigmant.target.innerText);
  let target=frigmant.target.innerText;
  target=target.toLowerCase();
  this.ActiveLink=target;
  console.log(target);
  if(target=='home'){

    console.log(this.ActiveLink);
    this._Router.navigateByUrl("home");
  }
  else if(target=='all'){
    console.log(this.ActiveLink);
    this._Router.navigateByUrl("/cars/all");
  }else{
    console.log(this.ActiveLink);
    this._Router.navigateByUrl("home#"+target);
  }

  //console.log(this.ActiveLink);
}



ngOnInit(): void {
  this.changeNavStyle();
  console.log(this.scroll);
  }
}
