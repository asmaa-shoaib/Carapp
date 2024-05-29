import { Component,OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent implements OnInit{
  ngOnInit(): void {
    AOS.init();
  }
}
