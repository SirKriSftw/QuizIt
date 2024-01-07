import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-quiz',
  templateUrl: './new-quiz.component.html',
  styleUrls: ['./new-quiz.component.css']
})
export class NewQuizComponent implements OnInit {

  router:any;

  public name: string = "";
  nameFormControl = new FormControl('', [Validators.required]);
  isValid: boolean = false;
  
  constructor(private route:Router) 
  { 
    this.router = route;
  }

  ngOnInit(): void 
  {

  }

  createQuiz(name:any)
  {
    /* FOR later check quiz of same name does not exist */
    console.log(name);
    this.router.navigateByUrl('/make/' + name);
  }

  getErrorMessage() {
    return 'You must enter a value';
  }
}
