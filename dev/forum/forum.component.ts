import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {RegisterComponent} from "./register.component";

@Component({
    selector: 'my-forum',
    templateUrl: 'dev/forum/forum.html',
    styleUrls: ['assets/scss/forum.scss'],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', name: 'Register', component: RegisterComponent, useAsDefault: true}

])
export class ForumComponent {

}