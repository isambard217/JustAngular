import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ContactFormComponent } from '../form/contact-form.component';

@NgModule({

    imports: [
      CommonModule,
      FormsModule
  ],
  declarations: [ContactFormComponent],
  //providers: [TweetService],
  exports:[ ContactFormComponent ]

})
export class ContactFormModule
{

}