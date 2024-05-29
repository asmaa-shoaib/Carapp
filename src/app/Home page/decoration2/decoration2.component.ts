import { Component,OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-decoration2', 
  templateUrl: './decoration2.component.html',
  styleUrl: './decoration2.component.scss'
})
export class Decoration2Component  implements OnInit{
  ngOnInit(): void {
    AOS.init();
  }
}
