// Third party  installs
import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Services 
import { TweetService } from './tweet/tweet.service';

// My Component 
import { TweetComponent } from './tweet/tweet.component';
import { SwitchComponent} from './switch/switch.component';  
import { LoopComponent } from './loop/loop.component';



@Component({
  selector: 'app-root',
  template: `
      <div style="border: 2px solid red;">
        App Component 
        <div *ngFor="let tweet of tweets">
          <app-tweet [data]="tweet"></app-tweet>
        </div>
      </div>
      <switch-app>
      </switch-app>
      <div style="border: 2px solid purple;">
        <ul>
            <li *ngFor="let ball of balls">
                Hellow {{ i + 1 }} - {{ ball }}
            </li>
        </ul>
      </div>
      <app-loop>
      </app-loop>

      <app-pipe>
      </app-pipe>

      <app-vote> </app-vote>

      <h1><u>Test Below</u></h1>

      <practiseContent>
              <div class="heading">
                    head
               </div>     
               <div class="Body"> 
                  This is the Body!
                </div>  
      </practiseContent>


      <h1> Form Practise </h1>

      <contact-form></contact-form>

    

  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tweets: any[];
  title = 'app works!';

  balls: ["course1", "course2", "course3"];

  post = {
      voteCount: 10,
      myVote: 0
  }

  constructor(tweetService : TweetService ) {

    this.tweets = tweetService.getAll();

    console.log(this.tweets);

  }

  onVoteChange($event) {

      console.log("From app Component " + $event);

  }


}
