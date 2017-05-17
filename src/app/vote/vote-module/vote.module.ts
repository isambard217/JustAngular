import { VoteComponent } from './../vote.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Personal Components



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VoteComponent
  ],
  exports:[
    VoteComponent
  ]

})
export class VoteModule { }
