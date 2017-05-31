import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';

// My Components 
import { LoopComponent } from './loop.component';


@NgModule({
    imports: [
    CommonModule,
    
  ],
  declarations: [LoopComponent],
  providers: [],
  exports:[ LoopComponent ]
})
export class LoopModule {


}