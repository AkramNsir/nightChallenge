import { Component } from '@angular/core';

@Component({
  selector: 'app-fun-facts',
  templateUrl: './fun-facts.component.html',
  styleUrls: ['./fun-facts.component.css']
})
export class FunFactsComponent {

  showPopup = false; // To control popup visibility
  currentFact = ''; // To store the current fact
  facts = [
    'The salinity of human blood is nearly identical to the salinity of seawater.',
    'Both humans and the ocean are composed of about 70% water.',
    'Minerals like sodium and potassium circulate in both the ocean and human bodies.',
    'The movement of ocean currents mirrors the flow of blood in the human body.',
    'Both the ocean and the human body regulate temperature and sustain life.',
  ];

  ngOnInit(): void {
    this.showRandomFact(); // Show the first fact
    setInterval(() => {
      this.showRandomFact();
    }, 30000); // Show a new fact every 1 minute
  }

  showRandomFact(): void {
    const randomIndex = Math.floor(Math.random() * this.facts.length);
    this.currentFact = this.facts[randomIndex];
    this.showPopup = true;

    // Automatically hide the popup after 10 seconds
    setTimeout(() => {
      this.showPopup = false;
    }, 10000);
  }
}
