import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
  styles:[
      `pointer {
        cursor: pointer;

      }`
  ]

})
export class VoteComponent implements OnInit {

  @Input() voteCount = 10; // Total Count
  @Input() myVote = 0; // User's vote can be -1, 0, 1

  @Output() onVote = new EventEmitter();

  Counter : number = 10;

  ngOnInit() {

  }

  onUp() {

    if(this.myVote == 1)
      return // finihses code block 

    ++this.myVote;

   // this.onVote.emit({ userVote : this.myVote });

  }

  onDown() {

    if(this.myVote == -1)
      return

    --this.myVote;

    //this.onVote.emit({ userVote : this.myVote });

  }


}
