import { Component } from '@angular/core';

@Component({
    selector: 'contact-form',
    templateUrl:`./contact-form.component.html`
    
})
export class ContactFormComponent {

        log(x) {
            console.log("The input result is: " + x);
        }

        onSubmit(form) {

         //   var s = serializeObj(form);
            console.log("Motivated ", form);
        }

}