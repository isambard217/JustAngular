import { TweetService } from './tweet.service';
import { Component, OnInit, Input, Output , AfterViewInit} from '@angular/core';

// We import the like.component because the select <app-like>
// refers to the like component class if we don't import the 
// LikeComponent the DOM will think that it is html and not an angular component
// We are able to import this component because is the tweetModule we import the
// LikeModule, which in turn gives us access to the LikeComponent 
import { LikeComponent } from '../like/like.component';

@Component({

  selector: 'app-tweet',
  template: `
    <div style="border: 2px solid blue;">

        <p><strong>name</strong>{{ data.authorName }} </p>
    
      <img src="{{ data.image }}" alt="Smiley face" height="42" width="42" />

      <p><strong>Twitter name: </strong> {{ data.twitterHandler }}</p>

      <p><strong>Number of Likes: </strong> {{ data.totalLike }}</p>

      <app-like (vote)="OnVote($event)"></app-like>
   </div>

   <br />
   <br />
  
  `,
  styleUrls: ['./tweet.component.css'],
  providers : [TweetService]

})
export class TweetComponent implements AfterViewInit {

   @Input() data : Object;


  constructor() { 

   //  console.log(this.data);
  }

/*
  ngOnInit() {

    console.log(this.data);
  }*/

  ngAfterViewInit(){

    console.log(this.data);
  }

  // We use the Event emitter when we want to
  // do something out of the scope of the child element
  // such as call a service.
  OnVote($event){

      console.log( "This is the event " + $event.userVote );

  }


}
