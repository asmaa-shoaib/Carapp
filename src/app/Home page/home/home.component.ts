import { Component ,OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit{

  ngOnInit(): void {
    AOS.init();
  }
}
