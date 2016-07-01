import {Component} from '@angular/core';
import {NavbarComponent} from "./navbar/navbar.component";

@Component({
    selector: 'my-app',
    template: `
        <nav-bar-header></nav-bar-header>
       
    `,
    directives: [NavbarComponent]
})
export class AppComponent {

}