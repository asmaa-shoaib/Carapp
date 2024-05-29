
import { LoadingService } from './Services/loading/loading.service';
import { Component, OnInit ,OnDestroy, Input} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import{UserServiceService} from './Services/User-service/user-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit  {
  title = 'App';
  constructor(public LoadingService:LoadingService,@Inject(DOCUMENT) private document: Document,private UserServiceService:UserServiceService){}
  disableRightClick() {
    this.document.addEventListener('contextmenu', (event) =>
      event.preventDefault()
    );
  }
  ScrollToTopOnntial(){
    if(document.body.scrollHeight>0){
      document.body.scrollTo(0,0);
    }
  }
  ngOnInit() {
    //this.disableRightClick()
    this.ScrollToTopOnntial();

  }

}
