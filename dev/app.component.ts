import {Component} from '@angular/core';
import {NavbarComponent} from "./navbar/navbar.component";
import {ROUTER_DIRECTIVES, RouteConfig} from "@angular/router-deprecated";
import {AboutComponent} from "./about/about.component";
import {MusicComponent} from "./music/music.component";
import {ForumComponent} from "./forum/forum.component";

@Component({
    selector: 'my-app',
    template: `
        <nav-bar-header></nav-bar-header>
       
    `,
    directives: [NavbarComponent, ROUTER_DIRECTIVES],

})
@RouteConfig([
    {path: '/about', name: 'About', component: AboutComponent},
    {path: '/music', name: 'Music', component: MusicComponent},
    {path: '/forum', name: 'Forum', component: ForumComponent}
])
export class AppComponent {

}
