import { TweetService } from './tweet.service';
import { Component, OnInit, Input, Output } from '@angular/core';


@Component({

  selector: 'app-tweet',
  template: `
    <div *ngFor="let tweet of tweets">
        <singleTweet [data]="tweet"></singleTweet>
    </div>
  `,
  styleUrls: ['./tweet.component.css'],
  providers : [TweetService]

})
export class TweetsComponent implements OnInit {

   //@Input() data;

   allTweets: any[];

   constructor (tweetService: TweetService) { 

     this.allTweets = tweetService.getAll();
     //  console.log(this.data);
  }

   
  ngOnInit() {

  }




}
