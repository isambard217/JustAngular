import { LikeModule } from './like/like.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

// My Modules
import { VoteModule }  from './vote/vote-module/vote.module';
import { TweetModule } from './tweet/tweet-module/tweet.module';
import { ContactFormModule } from './contact-form/contact-form.module';
import { ModelformModule } from './modelform/modelform.module';


// My Pipes
import { PipeModule } from './pipe/pipe.module';

// My Components
import { AppComponent } from './app.component';
import { TweetsComponent } from './tweet/tweets.component';
import { TweetComponent } from './tweet/singularTweet/tweet.component';

import { LoopModule } from './loop/loop.module';

import { ContentModule } from './content/content.module';
import { SwitchComponent} from './switch/switch.component';


@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    
    //My Modules
    TweetModule,
    VoteModule,
    PipeModule,
    ContactFormModule,
    ModelformModule,
    LoopModule,
    LikeModule,
    ContentModule,
    ContactFormModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
