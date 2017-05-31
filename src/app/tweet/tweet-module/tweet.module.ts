
import { TweetService } from './../tweet.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// My Componets
import { TweetsComponent} from '../tweets.component';
import { TweetComponent } from './../singularTweet/tweet.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TweetsComponent, TweetComponent],
  providers: [TweetService],
  exports: [TweetComponent, TweetsComponent]
})
export class TweetModule { }
