System.register(['@angular/core', "./navbar/navbar.component", "@angular/router-deprecated", "./about/about.component", "./music/music.component", "./forum/forum.component", 'angular2-spotify/angular2-spotify'], function(exports_1, context_1) {
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
    var core_1, navbar_component_1, router_deprecated_1, about_component_1, music_component_1, forum_component_1, angular2_spotify_1;
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
            },
            function (angular2_spotify_1_1) {
                angular2_spotify_1 = angular2_spotify_1_1;
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
                        providers: [
                            angular2_spotify_1.default,
                            core_1.provide("SpotifyConfig", {
                                useValue: {
                                    clientId: '8533e022572d49caa870cfb4fb5c6e90',
                                    redirectUri: 'http://localhost:3000/example.html',
                                    scope: 'user-read-private',
                                    // If you already have an authToken
                                    authToken: localStorage.getItem('spotify-token')
                                }
                            })
                        ]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQ0E7Z0JBQUE7Z0JBRUEsQ0FBQztnQkE1QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDREQUdUO3dCQUNELFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUUscUNBQWlCLENBQUM7d0JBQ2hELFNBQVMsRUFBRTs0QkFDUCwwQkFBYzs0QkFDZCxjQUFPLENBQUMsZUFBZSxFQUFFO2dDQUNyQixRQUFRLEVBQUU7b0NBQ04sUUFBUSxFQUFFLGtDQUFrQztvQ0FDNUMsV0FBVyxFQUFFLG9DQUFvQztvQ0FDakQsS0FBSyxFQUFFLG1CQUFtQjtvQ0FDMUIsbUNBQW1DO29DQUNuQyxTQUFTLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7aUNBQ25EOzZCQUNKLENBQUM7eUJBQ0w7cUJBRUosQ0FBQztvQkFDRCwrQkFBVyxDQUFDO3dCQUNULEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFDO3dCQUMxRCxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBQzt3QkFDMUQsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7cUJBQ2pFLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgcHJvdmlkZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05hdmJhckNvbXBvbmVudH0gZnJvbSBcIi4vbmF2YmFyL25hdmJhci5jb21wb25lbnRcIjtcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWRcIjtcbmltcG9ydCB7QWJvdXRDb21wb25lbnR9IGZyb20gXCIuL2Fib3V0L2Fib3V0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNdXNpY0NvbXBvbmVudH0gZnJvbSBcIi4vbXVzaWMvbXVzaWMuY29tcG9uZW50XCI7XG5pbXBvcnQge0ZvcnVtQ29tcG9uZW50fSBmcm9tIFwiLi9mb3J1bS9mb3J1bS5jb21wb25lbnRcIjtcbmltcG9ydCBTcG90aWZ5U2VydmljZSBmcm9tICdhbmd1bGFyMi1zcG90aWZ5L2FuZ3VsYXIyLXNwb3RpZnknO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmF2LWJhci1oZWFkZXI+PC9uYXYtYmFyLWhlYWRlcj5cbiAgICAgICBcbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtOYXZiYXJDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgU3BvdGlmeVNlcnZpY2UsXG4gICAgICAgIHByb3ZpZGUoXCJTcG90aWZ5Q29uZmlnXCIsIHtcbiAgICAgICAgICAgIHVzZVZhbHVlOiB7XG4gICAgICAgICAgICAgICAgY2xpZW50SWQ6ICc4NTMzZTAyMjU3MmQ0OWNhYTg3MGNmYjRmYjVjNmU5MCcsXG4gICAgICAgICAgICAgICAgcmVkaXJlY3RVcmk6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZXhhbXBsZS5odG1sJyxcbiAgICAgICAgICAgICAgICBzY29wZTogJ3VzZXItcmVhZC1wcml2YXRlJyxcbiAgICAgICAgICAgICAgICAvLyBJZiB5b3UgYWxyZWFkeSBoYXZlIGFuIGF1dGhUb2tlblxuICAgICAgICAgICAgICAgIGF1dGhUb2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Nwb3RpZnktdG9rZW4nKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIF1cblxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gICAge3BhdGg6ICcvYWJvdXQnLCBuYW1lOiAnQWJvdXQnLCBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9tdXNpYycsIG5hbWU6ICdNdXNpYycsIGNvbXBvbmVudDogTXVzaWNDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnL2ZvcnVtLy4uLicsIG5hbWU6ICdGb3J1bScsIGNvbXBvbmVudDogRm9ydW1Db21wb25lbnR9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
