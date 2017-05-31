import { Component } from '@angular/core';
import { Form, FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

// Validators
import { UsernameValidators } from '../Validators/UsernameValidators';

// Use this approach for model drive forms 


@Component({
    
    selector: 'signup-form',
    templateUrl: './modelform.component.html'
})
export class ModelformComponent {

    form: FormGroup;


    constructor(fb: FormBuilder) {
       this.form = fb.group({

                username: ['', [ Validators.required, UsernameValidators.cannotContainSpace ]],
                password: ['', Validators.required ]
        });

    }

   /* form = new FormControl({

        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });
        */



    SignUp() {

        console.log(this.form.value); 
    }


}