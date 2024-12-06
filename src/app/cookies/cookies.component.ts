import { Component } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css'],
})
export class CookiesComponent {
  showPopup = true;
  showCongrats = false;
  showFishGroup = false;
  fishes = Array(10).fill(0); // Group of 10 fish
  positionTop = '50%';
  positionLeft = '50%';
  rejectClickCount = 0;
  maxRejectAttempts = 10;
  laughSound = new Audio('assets/laugh.mp3');
  fakePopups: { id: number; top: string; left: string; rejectClicks: number }[] = []; // List of fake popups
  popupIdCounter = 0; // Counter to assign unique IDs to each popup

  acceptCookies(): void {
    this.showPopup = false;
    this.showFishGroup = true;

    setTimeout(() => {
      this.showFishGroup = false;
    }, 5000);

    const congratsSound = new Audio('assets/dauphin.mp3');
    try {
      congratsSound.play();
    } catch (error) {
      console.error('Audio playback failed:', error);
    }
    
  }

  rejectCookies(): void {
    if (this.rejectClickCount >= this.maxRejectAttempts) {
      this.showPopup = false;
      this.showCongrats = true;

      this.laughSound.pause();
      this.laughSound.currentTime = 0;

      const congratsSound = new Audio('assets/congrats.mp3');
      congratsSound.play();

      setTimeout(() => {
        this.showCongrats = false;
      }, 6000);
    } else {
      try {
        this.laughSound.play();
      } catch (error) {
        console.error('Audio playback failed:', error);
      }
      
    }
  }

  moveRejectButton(): void {
    if (this.rejectClickCount < this.maxRejectAttempts) {
      this.rejectClickCount++;

      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      const randomTop = Math.random() * (viewportHeight - 150);
      const randomLeft = Math.random() * (viewportWidth - 200);

      this.positionTop = `${randomTop}px`;
      this.positionLeft = `${randomLeft}px`;

      for (let i = 0; i < 2; i++) {
        const fakeTop = Math.random() * (viewportHeight - 150);
        const fakeLeft = Math.random() * (viewportWidth - 200);

        this.fakePopups.push({
          id: this.popupIdCounter++,
          top: `${fakeTop}px`,
          left: `${fakeLeft}px`,
          rejectClicks: 0,
        });
      }

      this.laughSound.play();
    }
  }

  acceptFakeCookie(id: number): void {
    // Remove the specific fake popup
    this.fakePopups = this.fakePopups.filter((popup) => popup.id !== id);
    const mmmSound = new Audio('assets/mmm.mp3');
         mmmSound.play();
  }

  rejectFakePopup(id: number): void {
    const popup = this.fakePopups.find((popup) => popup.id === id);

    if (popup) {
      popup.rejectClicks++;

      if (popup.rejectClicks <= 3) {
         this.moveRejectButton();
         const noSound = new Audio('assets/hell-no.mp3');
         noSound.play();
      } else {
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;

        const randomTop = Math.random() * (viewportHeight - 150);
        const randomLeft = Math.random() * (viewportWidth - 200);

        // Add a confirmation popup
        this.fakePopups.push({
          id: this.popupIdCounter++,
          top: `${randomTop}px`,
          left: `${randomLeft}px`,
          rejectClicks: 0,
        });
        

      }
    }
  }
}
