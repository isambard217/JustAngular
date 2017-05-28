import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

// My Modules
import { VoteModule }  from './vote/vote-module/vote.module';
import { TweetModule } from './tweet/tweet-module/tweet.module';
import { LoopModule } from './loop/loop.module';
import { PipeModule } from './pipe/pipe.module';
import { ContentModule } from './content/content.module';
import { ContactFormModule } from './form/contact-form.module';

// My Components
import { AppComponent } from './app.component';
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
    LoopModule,
    PipeModule,
    ContentModule,
    ContactFormModule
    //LikeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
