import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Component } from '@angular/core';

// My Pipe
import { SummaryPipe } from './pipe/summary.pipe';
import { TweetService } from './tweet/tweet.service';

//My Components
import { TweetsComponent } from './tweet/tweets.component';
import { PipeComponent } from './pipe/pipe.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tweets: any[];
  courses = [];

  title = 'app works!';

  post = {

      voteCount: 10,
      myVote: 0
  }

  constructor (tweetService : TweetService) {

    this.tweets = tweetService.getAll();

    console.log("The tweet is " );

  }

  onVoteChange($event) {

      console.log("From app Component " + $event);

  }


}
