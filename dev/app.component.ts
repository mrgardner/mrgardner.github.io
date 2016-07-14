import {Component, provide} from '@angular/core';
import {NavbarComponent} from "./navbar/navbar.component";
import {ROUTER_DIRECTIVES, RouteConfig} from "@angular/router-deprecated";
import {AboutComponent} from "./about/about.component";
import {MusicComponent} from "./music/music.component";
import {ForumComponent} from "./forum/forum.component";
import SpotifyService from 'angular2-spotify/angular2-spotify';


@Component({
    selector: 'my-app',
    template: `
        <nav-bar-header></nav-bar-header>
       
    `,
    directives: [NavbarComponent, ROUTER_DIRECTIVES],
    providers: [
        SpotifyService,
        provide("SpotifyConfig", {
            useValue: {
                clientId: '8533e022572d49caa870cfb4fb5c6e90',
                redirectUri: 'http://localhost:3000/example.html',
                scope: 'user-read-private',
                // If you already have an authToken
                authToken: localStorage.getItem('spotify-token')
            }
        })
    ]

})
@RouteConfig([
    {path: '/about', name: 'About', component: AboutComponent},
    {path: '/music', name: 'Music', component: MusicComponent},
    {path: '/forum/...', name: 'Forum', component: ForumComponent}
])
export class AppComponent {

}
