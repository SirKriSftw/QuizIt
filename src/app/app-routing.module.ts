import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NewQuizComponent } from './components/new-quiz/new-quiz.component';
import { LoadQuizComponent } from './components/load-quiz/load-quiz.component';

const routes: Routes = 
[
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'new', component:NewQuizComponent},
  {path:'load', component:LoadQuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
