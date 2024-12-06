import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 80;
  }
  showPopup: boolean = true;

  ngOnInit(): void {
    // Automatically close the popup after 10 seconds
    setTimeout(() => {
      this.showPopup = false;
    }, 10000);
  }

  closePopup(): void {
    this.showPopup = false;
  }
}
