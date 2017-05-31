import { Component } from '@angular/core';


@Component({
    selector: 'switch-app',
    template: ` <ul class="nav nav-pills">
                    <li [class.active]="viewMode == 'map'"><a (click)="viewMode = 'map'">Map View</a></li>
                    <li [class.active]="viewMode == 'list'"><a (click)="viewMode = 'list'">List View</a></li>
                </ul>
                <div [ngSwitch]="viewMode" style="border: 2px solid yellow;">
                    <ng-template [ngSwitchCase]="'map'"> Map View Conten;t </ng-template>
                    <ng-template [ngSwitchCase]="'list'">list content </ng-template>
                </div>
        `
})
export class SwitchComponent {

    viewMode = 'map';

}


                