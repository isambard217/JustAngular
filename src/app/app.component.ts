import { TweetService } from './tweet/tweet.service';
import { TweetComponent } from './tweet/tweet.component';
import { Component } from '@angular/core';

import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  template: `
      <div style="border: 2px solid red;">
        App Component 
        <div *ngFor="let tweet of tweets">
          <app-tweet [data]="tweet"></app-tweet>
        </div>
      </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tweets: any[];
  title = 'app works!';

  post = {
      voteCount: 10,
      myVote: 0
  }

  constructor(tweetService : TweetService ){

    this.tweets = tweetService.getAll();

    console.log("The tweet is " );

  }

  onVoteChange($event) {

      console.log("From app Component " + $event);

  }


}
