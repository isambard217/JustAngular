import { ModelformComponent } from './../modelform/modelform.component';
import { Form, FormControlName, Validators, FormBuilder } from '@angular/forms';
import { Directive } from '@angular/core';


@Directive({

 selector: '[validateEmail][ngModel]'

})
export class UsernameValidators {

    static cannotContainSpace(control: FormControlName) {
            
            if (control.value.indexOf('') >= 0) {
                    return { cannotContainSpace: true}

            }

            return null;
    }

}