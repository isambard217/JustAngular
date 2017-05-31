import { Component } from '@angular/core';

// My Pipe 
import { SummaryPipe } from './summary.pipe';


@Component({
    selector: "app-pipe",
    template: `
    
    {{ post.title | summary }}
    `
})
export class PipeComponent {


    post = {

        title: "Captain America the First Avenger",
        body:`
            This is the story of a brave weak solider who took a Jab in order to 
            become the formidable Captain America.
        `

    };

}