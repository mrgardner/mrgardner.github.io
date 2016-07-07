System.register(['@angular/core', "./navbar/navbar.component", "@angular/router-deprecated", "./about/about.component", "./music/music.component", "./forum/forum.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, navbar_component_1, router_deprecated_1, about_component_1, music_component_1, forum_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (music_component_1_1) {
                music_component_1 = music_component_1_1;
            },
            function (forum_component_1_1) {
                forum_component_1 = forum_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <nav-bar-header></nav-bar-header>\n       \n    ",
                        directives: [navbar_component_1.NavbarComponent, router_deprecated_1.ROUTER_DIRECTIVES],
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/about', name: 'About', component: about_component_1.AboutComponent },
                        { path: '/music', name: 'Music', component: music_component_1.MusicComponent },
                        { path: '/forum/...', name: 'Forum', component: forum_component_1.ForumComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFoQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDREQUdUO3dCQUNELFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUUscUNBQWlCLENBQUM7cUJBRW5ELENBQUM7b0JBQ0QsK0JBQVcsQ0FBQzt3QkFDVCxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBQzt3QkFDMUQsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7d0JBQzFELEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFDO3FCQUNqRSxDQUFDOztnQ0FBQTtnQkFHRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJkZXYvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmF2YmFyQ29tcG9uZW50fSBmcm9tIFwiLi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVDb25maWd9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZFwiO1xuaW1wb3J0IHtBYm91dENvbXBvbmVudH0gZnJvbSBcIi4vYWJvdXQvYWJvdXQuY29tcG9uZW50XCI7XG5pbXBvcnQge011c2ljQ29tcG9uZW50fSBmcm9tIFwiLi9tdXNpYy9tdXNpYy5jb21wb25lbnRcIjtcbmltcG9ydCB7Rm9ydW1Db21wb25lbnR9IGZyb20gXCIuL2ZvcnVtL2ZvcnVtLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5hdi1iYXItaGVhZGVyPjwvbmF2LWJhci1oZWFkZXI+XG4gICAgICAgXG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbTmF2YmFyQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU10sXG5cbn0pXG5AUm91dGVDb25maWcoW1xuICAgIHtwYXRoOiAnL2Fib3V0JywgbmFtZTogJ0Fib3V0JywgY29tcG9uZW50OiBBYm91dENvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvbXVzaWMnLCBuYW1lOiAnTXVzaWMnLCBjb21wb25lbnQ6IE11c2ljQ29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9mb3J1bS8uLi4nLCBuYW1lOiAnRm9ydW0nLCBjb21wb25lbnQ6IEZvcnVtQ29tcG9uZW50fVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
