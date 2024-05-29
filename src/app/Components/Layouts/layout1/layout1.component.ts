import { Component ,OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-layout1',
  templateUrl: './layout1.component.html',
  styleUrl: './layout1.component.scss'
})
export class Layout1Component implements OnInit{

  ngOnInit(): void { 
    AOS.init();
  }
}
