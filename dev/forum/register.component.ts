import {Component, OnInit} from "@angular/core";
import {FormBuilder, ControlGroup, Validators, Control} from '@angular/common';
@Component({
    selector: 'my-forum-register',
    templateUrl: 'dev/forum/register.html',
    styleUrls: ['assets/scss/register.scss']
})
export class RegisterComponent implements OnInit{
    registerForm = ControlGroup;
    user = {firstName: '', lastName: '', email: '', password: ''};

    constructor(private _formBuilder: FormBuilder) {}

    onSubmit() {
        this.user = this.registerForm.value;
    }

    ngOnInit():any {
        this.registerForm = this._formBuilder.group({
            'firstName': ['', Validators.required],
            'lastName': ['', Validators.required],
            'email': ['', Validators.compose([
                Validators.required,
                validateEmail
            ])],
            'password': ['', Validators.required],
            'confirmPassword': ['', Validators.required],


        });
    }
}

function validateEmail(control: Control): {[s: string]: boolean} {
    if (!control.value.match('(([a-z])|([A-Z])|([.])|([_]))+@+(([a-z])|([A-Z]))+([.])+(([a-z])|([A-Z])){2,}')) {
        return {invalidEmail: true};
    }
}