
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common'; 

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

}