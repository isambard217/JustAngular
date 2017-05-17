import { TweetService } from './tweet.service';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({

  selector: 'app-tweet',
  //templateUrl: './tweet.component.html',
  template: `
    <div style="10px solid blue;">
       
       <img src="{{ data.imageUrl }}">

       {{ data.body }}

    </div> 
  `,
  styleUrls: ['./tweet.component.css'],
  providers : [TweetService]

})
export class TweetComponent implements OnInit {

   @Input() data;

   /* 
      @Input() image;
    @Input() nameOfTheAuthor;
    @Input() twitterHandler;
    @Input() likeButton;

    @Input() tweet;
    */

  // @Input() data;

   /*data={
       image : tweet.image,
       authorName : tweet.authorName,
       twitterHanle : tweet.twitterHandler ,
       totalLike: tweet.totalLike,
       iLike: tweet.iLike

   };*/


  constructor() { 

     console.log(this.data);
  }

   

  ngOnInit() {

  }


}
