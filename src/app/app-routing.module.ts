import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { SimPageComponent } from './sim-page/sim-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirection par défaut
  { path: 'home', component: HomeComponent },
  {path:'simpage',component:SimPageComponent},
  {path:'quiz',component:QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
