import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sim-page',
  templateUrl: './sim-page.component.html',
  styleUrls: ['./sim-page.component.css']
})
export class SimPageComponent {

  isFirstSectionVisible = false; // Visibility state for the first section
  isSecondSectionVisible = false; // Visibility state for the second section

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const firstSection = document.querySelector('.first-section');
    const secondSection = document.querySelector('.second-content');
  
    if (firstSection) {
      const firstSectionPosition = firstSection.getBoundingClientRect().top;
  
      // Use window.innerHeight for viewport height
      if (firstSectionPosition < window.innerHeight && firstSectionPosition > 0) {
        this.isFirstSectionVisible = true;
      }
    }
  
    if (secondSection) {
      const secondSectionPosition = secondSection.getBoundingClientRect().top;
  
      // Use window.innerHeight for viewport height
      if (secondSectionPosition < window.innerHeight && secondSectionPosition > 0) {
        this.isSecondSectionVisible = true;
      }
    }
  }
  
}
