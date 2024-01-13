import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

// NG Mats
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';

// Components
import { AppComponent } from './app.component';
import { NewQuizButtonComponent } from './components/new-quiz-button/new-quiz-button.component';
import { LoadQuizButtonComponent } from './components/load-quiz-button/load-quiz-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NewQuizComponent } from './components/new-quiz/new-quiz.component';
import { LoadQuizComponent } from './components/load-quiz/load-quiz.component';
import { MakeQuestionsComponent } from './components/make-questions/make-questions.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NewQuizButtonComponent,
    LoadQuizButtonComponent,
    HeaderComponent,
    HomeComponent,
    NewQuizComponent,
    LoadQuizComponent,
    MakeQuestionsComponent,
    QuestionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatExpansionModule,
    MatTooltipModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
