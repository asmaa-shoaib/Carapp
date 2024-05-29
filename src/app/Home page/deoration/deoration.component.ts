import { Component ,OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-deoration',
  templateUrl: './deoration.component.html',
  styleUrl: './deoration.component.scss'
})
export class DeorationComponent implements OnInit{

  ngOnInit(): void { 
    AOS.init();
  }
}
