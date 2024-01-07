import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-load-quiz-button',
  templateUrl: './load-quiz-button.component.html',
  styleUrls: ['./load-quiz-button.component.css']
})
export class LoadQuizButtonComponent implements OnInit {

  router:any;
  constructor(private route:Router) 
  { 
    this.router = route;
  }

  ngOnInit(): void {
  }

  loadQuiz()
  {
    console.log("Loading Quizs.");
    this.router.navigateByUrl('load');
  }
}
