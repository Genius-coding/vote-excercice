import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  @Input() answerYes;
  @Input() answerNo;
  @Input() question;

  @Output() output = new EventEmitter<boolean>();



  constructor() { }

  ngOnInit(): void {
  }

  vote(value: boolean) {
    this.output.emit(value);
  }

}
