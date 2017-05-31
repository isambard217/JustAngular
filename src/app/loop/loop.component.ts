import { Component } from '@angular/core';

@Component({
    selector: 'app-loop',
    template: ` 
            Blahh Blahh
            <button (click)="OnClick()">

            </button>
            <ul>
                <li *ngFor="let ball of balls">
                        {{ ball }}                      
                </li>
            </ul>
    `
})
export class LoopComponent {
   
    balls: ["Ball1", "Ball2", "Ball3"];
    

    onclick() {
        
        console.log();
    }
    

}