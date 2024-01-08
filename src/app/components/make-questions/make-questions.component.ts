import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-make-questions',
  templateUrl: './make-questions.component.html',
  styleUrls: ['./make-questions.component.css']
})
export class MakeQuestionsComponent implements OnInit {

  test: string = "";
  questions:any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.questions = [{id:1, question:"test", choices:["a","b","c","d"], answer:"test"}]
    this.test = this.route.snapshot.params['test'];
  }

}
