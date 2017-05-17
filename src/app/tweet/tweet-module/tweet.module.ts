import { TweetService } from './../tweet.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// My Componets
import { TweetComponent} from '../tweet.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TweetComponent],
  providers: [TweetService],
  exports:[TweetComponent]
})
export class TweetModule { }
