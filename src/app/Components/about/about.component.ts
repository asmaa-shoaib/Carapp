import { Component,OnInit } from '@angular/core';
import AOS from 'aos'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{
ngOnInit(): void {
  AOS.init();
}
}
