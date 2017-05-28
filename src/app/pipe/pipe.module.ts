import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';

// My Components
import { PipeComponent } from './pipe.component';

// My Pipes
import {SummaryPipe } from './summary.pipe';

@NgModule({
    imports: [
    CommonModule,
    
  ],

  declarations: [ PipeComponent, SummaryPipe ],
  providers: [],
  exports:[ PipeComponent],

})
export class PipeModule {



}