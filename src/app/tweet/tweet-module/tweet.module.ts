
import { TweetService } from './../tweet.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // this allows us to use ngfor ngif etc


// My Componets
import { TweetsComponent} from '../tweets.component';
import { TweetComponent } from './../singularTweet/tweet.component';


// My Modules 
import { LikeModule } from '../../like/like.module';



@NgModule({
  imports: [
    CommonModule,
    LikeModule
  ],
  declarations: [TweetsComponent, TweetComponent],
  providers: [TweetService],
  exports: [TweetComponent, TweetsComponent]
})
export class TweetModule { }
