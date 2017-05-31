import { Component } from '@angular/core';

// Use this approach when using template driven forms

@Component({
    selector: 'contact-form',
    templateUrl: 'contact-form.component.html'


})
export class ContactFormComponent {

    frequencies = [
        { id: 1, label: 'Daily' }, 
        { id: 2, label: 'Weekly' },
        { id: 3, label: 'Monthly' }
    ];
    
    onSubscribe(form){
        console.log(form.value);
    }

}