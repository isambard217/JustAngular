import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// My Modules
import { VoteModule }  from './vote/vote-module/vote.module';
import { TweetModule } from './tweet/tweet-module/tweet.module';
import { ContactFormModule } from './contact-form/contact-form.module';
import { ModelformModule } from './modelform/modelform.module';


// My Pipes
import { PipeModule } from './pipe/pipe.module';

// My Components
import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { TweetsComponent } from './tweet/tweets.component';
import { TweetComponent } from './tweet/singularTweet/tweet.component';




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
    VoteModule,
    PipeModule,
    ContactFormModule,
    ModelformModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
