import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  //templateUrl: './like.component.html',
  template: `  
            <button (click)="OnClick()" [style.isClicked]="isClicked" > Click </button>
             

             {{ TotalLikes }}

            `,
  styles:[
    `
      .clicked{

          background-color: red;
      }
    `
  ],
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Output() TotalLikes : number = 10;
  @Output() myLike : number = 1;

  isClicked: boolean = false;
 // ShowColor: boolean = false;

  @Output() vote = new EventEmitter();

  OnClick() {

    if(this.isClicked == true)
    {

       this.TotalLikes = this.TotalLikes - this.myLike;
       this.isClicked = false;

    } else {

       this.TotalLikes = this.TotalLikes + this.myLike;

       this.isClicked = true;
    }

    
    // this.TotalLikes += this.myLike;
    // ++this.TotalLikes;
    this.vote.emit({ userVote : this.myLike   });

  }


  constructor() { }

  ngOnInit() { }



}
