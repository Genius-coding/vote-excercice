import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dispaly',
  templateUrl: './dispaly.component.html',
  styleUrls: ['./dispaly.component.css']
})
export class DispalyComponent implements OnInit {
  answerNo = 'No';
  answerYes = 'Yes';
  question = 'Easy question';
  result


  constructor() { }

  ngOnInit(): void {
  }

  getResult(value: any) {
    this.result = value;
  }

}
