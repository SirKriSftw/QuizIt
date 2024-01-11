import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-make-questions',
  templateUrl: './make-questions.component.html',
  styleUrls: ['./make-questions.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class MakeQuestionsComponent implements OnInit {

  test: string = "";
  questions:any = [];
  id:number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void 
  {    
    this.test = this.route.snapshot.params['test'];
  }

  addQuestion()
  {
    this.id = this.id + 1;
    this.questions.push({id: this.id, question:"", choices: [], answer: ""});
    console.log(this.questions)
  }

  deleteQuestion(id:any)
  {
    let index = this.questions.indexOf(this.questions.find((q: { id: any; }) => q.id == id));
    this.questions.splice(index, 1);
    console.log(id);
  }
}
