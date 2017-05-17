import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// My Modules
import { VoteModule }  from './vote/vote-module/vote.module';
import { TweetModule } from './tweet/tweet-module/tweet.module';


import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';


@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //My Modules
    TweetModule,
    VoteModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
