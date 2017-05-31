
import { TweetService } from './../tweet.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // this allows us to use ngfor ngif etc

<<<<<<< HEAD
// My Componets
import { TweetsComponent} from '../tweets.component';
import { TweetComponent } from './../singularTweet/tweet.component';

=======
// My Modules 
import { LikeModule } from '../../like/like.module';

// My Components
import { TweetComponent} from '../tweet.component';
>>>>>>> 46240edf3d8fd203b3f63b7c356afd2384fc9b05

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
