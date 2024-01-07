import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-make-questions',
  templateUrl: './make-questions.component.html',
  styleUrls: ['./make-questions.component.css']
})
export class MakeQuestionsComponent implements OnInit {

  test: string = "";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.test = this.route.snapshot.params['test'];
  }

}
