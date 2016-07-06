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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFoQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDREQUdUO3dCQUNELFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUUscUNBQWlCLENBQUM7cUJBRW5ELENBQUM7b0JBQ0QsK0JBQVcsQ0FBQzt3QkFDVCxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBQzt3QkFDMUQsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7d0JBQzFELEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFDO3FCQUNqRSxDQUFDOztnQ0FBQTtnQkFHRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOYXZiYXJDb21wb25lbnR9IGZyb20gXCIuL25hdmJhci9uYXZiYXIuY29tcG9uZW50XCI7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZ30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkXCI7XG5pbXBvcnQge0Fib3V0Q29tcG9uZW50fSBmcm9tIFwiLi9hYm91dC9hYm91dC5jb21wb25lbnRcIjtcbmltcG9ydCB7TXVzaWNDb21wb25lbnR9IGZyb20gXCIuL211c2ljL211c2ljLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtGb3J1bUNvbXBvbmVudH0gZnJvbSBcIi4vZm9ydW0vZm9ydW0uY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmF2LWJhci1oZWFkZXI+PC9uYXYtYmFyLWhlYWRlcj5cbiAgICAgICBcbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtOYXZiYXJDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXSxcblxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gICAge3BhdGg6ICcvYWJvdXQnLCBuYW1lOiAnQWJvdXQnLCBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9tdXNpYycsIG5hbWU6ICdNdXNpYycsIGNvbXBvbmVudDogTXVzaWNDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnL2ZvcnVtLy4uLicsIG5hbWU6ICdGb3J1bScsIGNvbXBvbmVudDogRm9ydW1Db21wb25lbnR9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
