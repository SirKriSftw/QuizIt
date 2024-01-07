import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-quiz-button',
  templateUrl: './new-quiz-button.component.html',
  styleUrls: ['./new-quiz-button.component.css']
})
export class NewQuizButtonComponent implements OnInit {

  router:any;
  constructor(private route:Router) 
  {
    this.router = route;
  }

  ngOnInit(): void {
  }

  newQuiz()
  {
    console.log("Making new Quiz.");
    this.router.navigateByUrl('new');
  }
}
