import { ModelformComponent } from './modelform.component';
import { NgModule, Component } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// My validators 
import { UsernameValidators } from '../Validators/UsernameValidators';

@NgModule({
    declarations: [ ModelformComponent, UsernameValidators],
    exports: [ ModelformComponent, UsernameValidators ],      
    imports: [ 
                 BrowserModule,
                 FormsModule,
                 HttpModule, 
                 ReactiveFormsModule
            ]
})
export class ModelformModule {



}