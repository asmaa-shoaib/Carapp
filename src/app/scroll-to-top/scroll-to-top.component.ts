import { Component ,HostListener ,OnInit} from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.scss'
})


export class ScrollToTopComponent{
  Scrolled:boolean=false;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {

    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    //console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.Scrolled = true;
    } else {
      this.Scrolled = false;
    }
  }
  scroll_To_Top(){
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
  //console.log(window.pageYOffset);
}

}
