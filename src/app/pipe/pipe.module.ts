<<<<<<< HEAD
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// My Pipes
import { SummaryPipe } from './summary.pipe';

// My Components
import { PipeComponent } from './pipe.component';

@NgModule({
        declarations: [ PipeComponent, SummaryPipe ],
        exports: [SummaryPipe, PipeComponent],
        imports: [ BrowserModule, FormsModule, HttpModule ]
})
export class PipeModule {

=======
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



>>>>>>> 46240edf3d8fd203b3f63b7c356afd2384fc9b05
}