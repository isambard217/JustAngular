import { TweetService } from './../tweet.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // this allows us to use ngfor ngif etc

// My Modules 
import { LikeModule } from '../../like/like.module';

// My Components
import { TweetComponent} from '../tweet.component';

@NgModule({
  imports: [
    CommonModule,
    LikeModule
  ],
  declarations: [TweetComponent],
  providers: [TweetService],
  exports:[TweetComponent]
})
export class TweetModule { }
