import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SimPageComponent } from './sim-page/sim-page.component';
import { CookiesComponent } from './cookies/cookies.component';
import { FunFactsComponent } from './fun-facts/fun-facts.component';
import { QuizComponent } from './quiz/quiz.component';
import { GuidePopComponent } from './guide-pop/guide-pop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SimPageComponent,
    CookiesComponent,
    FunFactsComponent,
    QuizComponent,
    GuidePopComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule, // Add CommonModule here
    AppRoutingModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
