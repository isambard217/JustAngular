import { Component, Input} from '@angular/core';


@Component({
    selector: "singleTweet",
    template: `

        {{ data.image }}

        {{ data.authorName }}

        {{ data.twitterHandler }}
        {{ data.totalLike }}
        {{ data.iLike }}
    
    `

})
export class TweetComponent {


        @Input() data;

        constructor(){


        }


        ngOnInit(){


        }


}