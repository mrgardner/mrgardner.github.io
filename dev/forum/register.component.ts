import {Component, OnInit} from "@angular/core";
import {FormBuilder, ControlGroup, Validators, Control} from '@angular/common';
import {UserService} from "./user.service";
@Component({
    selector: 'my-forum-register',
    templateUrl: 'dev/forum/register.html',
    styleUrls: ['assets/scss/register.scss'],
    providers: [UserService]
})
export class RegisterComponent implements OnInit{
    registerForm = ControlGroup;
    user = {firstName: '', lastName: '', email: '', password: '', username: ''};
    response: string;

    constructor(private _formBuilder: FormBuilder, private _userService: UserService) {}

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
            'username': ['', Validators.required],
        }, {validator: validatePassword('password', 'confirmPassword')}
        );
    }

    createUser (firstName: string, lastName: string, email: string, password: string, username: string) {
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            username: username

        };
        this._userService.createUser(data, username);
    }

    getUser (user: string) {
        this._userService.getUser(user);
    }
}

function validateEmail(control: Control): {[s: string]: boolean} {
    if (!control.value.match('(([a-z])|([A-Z])|([.])|([_]))+@+(([a-z])|([A-Z]))+([.])+(([a-z])|([A-Z])){2,}')) {
        return {invalidEmail: true};
    }
}

function validatePassword(passwordKey: string, confirmPasswordKey: string) {
    return (group: ControlGroup): {[key: string]: any} => {
        let password = group.controls[passwordKey];
        let confirmPassword = group.controls[confirmPasswordKey];

        if (password.value !== confirmPassword.value) {
            return {
                mismatchedPasswords: true
            };
        }
    }
}