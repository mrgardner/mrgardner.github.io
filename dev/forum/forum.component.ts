import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {RegisterComponent} from "./register.component";
import {LoginComponent} from "./login.component";
import {HomeComponent} from "./home.component";

@Component({
    selector: 'my-forum',
    templateUrl: 'dev/forum/forum.html',
    styleUrls: ['assets/scss/forum.scss'],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/register', name: 'Register', component: RegisterComponent},
    {path: '/login', name: 'Login', component: LoginComponent},
    {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true}

])
export class ForumComponent {

}