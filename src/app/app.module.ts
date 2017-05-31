import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

// My Modules
import { VoteModule }  from './vote/vote-module/vote.module';
import { TweetModule } from './tweet/tweet-module/tweet.module';
<<<<<<< HEAD
import { ContactFormModule } from './contact-form/contact-form.module';
import { ModelformModule } from './modelform/modelform.module';


// My Pipes
import { PipeModule } from './pipe/pipe.module';

// My Components
import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { TweetsComponent } from './tweet/tweets.component';
import { TweetComponent } from './tweet/singularTweet/tweet.component';

=======
import { LoopModule } from './loop/loop.module';
import { PipeModule } from './pipe/pipe.module';
import { ContentModule } from './content/content.module';
import { ContactFormModule } from './form/contact-form.module';

// My Components
import { AppComponent } from './app.component';
import { SwitchComponent} from './switch/switch.component';
>>>>>>> 46240edf3d8fd203b3f63b7c356afd2384fc9b05



@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LikeComponent,
    
  
=======
    SwitchComponent,
    
>>>>>>> 46240edf3d8fd203b3f63b7c356afd2384fc9b05
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    
    //My Modules
    TweetModule,
    VoteModule,
<<<<<<< HEAD
    PipeModule,
    ContactFormModule,
    ModelformModule 
=======
    LoopModule,
    PipeModule,
    ContentModule,
    ContactFormModule
    //LikeModule
>>>>>>> 46240edf3d8fd203b3f63b7c356afd2384fc9b05
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
