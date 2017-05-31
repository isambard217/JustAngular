import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

import { HttpModule } from '@angular/http';

// My Modules



// My Components
import { ContactFormComponent } from './contact-form.component';


@NgModule({

        declarations:[ ContactFormComponent ],
        exports:[ ContactFormComponent ],      
        imports:[ 
                 BrowserModule,
                 FormsModule,
                 HttpModule, 
                 ReactiveFormsModule,
                 
               ]
})
export class ContactFormModule {



}