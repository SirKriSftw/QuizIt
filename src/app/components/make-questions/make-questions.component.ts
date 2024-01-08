import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-make-questions',
  templateUrl: './make-questions.component.html',
  styleUrls: ['./make-questions.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class MakeQuestionsComponent implements OnInit {

  test: string = "";
  questions:any;
  id:number = 2;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.questions = [{id: 1, question: "test", choices: ["a","b","c","d"], answer: "test"},{id: 2, question: "test2",  answer: "test2"}]
    this.test = this.route.snapshot.params['test'];
  }

  addQuestion()
  {
    this.id = this.id + 1;
    this.questions.push({id: this.id, question:"test", choices: ["a","b","c","d"], answer: "test"});
    console.log(this.questions)
  }
}
