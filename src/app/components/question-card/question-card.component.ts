import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {

  @Input() questionCard:any;
  editing:boolean = true;
  hasChoices:boolean = false;
  choiceCount:number = 0;
  answers:any = [];

  constructor() { }

  ngOnInit(): void 
  {
    console.log(this.questionCard)
  }

  onRightClick()
  {
    event?.preventDefault();
    this.editing = !this.editing;
  }

  updateQuestion(value:any)
  {
    this.questionCard.question = value;
  }

  updateChoice(value:any, choice:any)
  {
    console.log(choice + " " + value);
    this.questionCard.choices[choice].value = value;
  }

  updateAnswer(value:any)
  {
    this.questionCard.answer = value;
  }

  addChoice()
  {
    this.questionCard.choices.push({value: "",isCorrect: false});
    console.log(this.questionCard.choices); 
    this.choiceCount++;
    this.hasChoices = true;
  }

  removeChoice(choice:any)
  {
    console.log(choice);
    this.choiceCount--;
    if(this.choiceCount == 0)
    {
      this.hasChoices = false;
    }
    this.questionCard.choices.splice(choice, 1);
  }

  toggleChoice(choice:any)
  {
    this.questionCard.choices[choice].isCorrect = !this.questionCard.choices[choice].isCorrect;
    if(this.questionCard.choices[choice].isCorrect)
    {
      this.answers.push(this.questionCard.choices[choice]);
    }
  }
}
