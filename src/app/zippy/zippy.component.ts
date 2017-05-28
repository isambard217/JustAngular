import { Component } from '@angular/core';

@Component({
    selector: "zippy",
    template:`
        <div class="panel panel-default">

            <div class="panel-body">
                <ng-content select=".bodyone">
                </ng-content>
            </div>

            <div class="panel-body">
                <ng-content select=".bodytwo">
                </ng-content>
            </div>

        </div>
    
    `

})
export class ZippyComponent {


}