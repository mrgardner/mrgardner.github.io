import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {Component, OnInit} from "@angular/core";
import {FormBuilder, ControlGroup, Validators, Control} from '@angular/common';
import {UserService} from "./user.service";
@Component({
    selector: 'my-forum-login',
    templateUrl: 'dev/forum/login.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService]
})
export class LoginComponent implements OnInit {
    loginForm = ControlGroup;
    user = {firstName: '', lastName: '', email: '', password: '', username: ''};
    response: string;

    constructor(private _formBuilder: FormBuilder, public _userService: UserService) {}

    onSubmit() {
        // this.user = this.loginForm.value;
    }

    ngOnInit():any {
        this.loginForm = this._formBuilder.group({
                'password': ['', Validators.required],
                'username': ['', Validators.required],
            }
        );
    }

    public createUser (firstName: string, lastName: string, email: string, password: string, username: string) {
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            username: username

        };
        this._userService.createUser(data, username);
    }


     // getUser(username: string) {
     //     this._userService.getUser(username);
     //    }


    getAuth (username: string, passsord: string) {
        console.log(username);
        var user = this._userService.getUser(username);
        console.log(user);

    }

}
