System.register(["@angular/core", "@angular/router-deprecated", "./register.component", "./login.component", "./home.component"], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, register_component_1, login_component_1, home_component_1;
    var ForumComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            ForumComponent = (function () {
                function ForumComponent() {
                }
                ForumComponent = __decorate([
                    core_1.Component({
                        selector: 'my-forum',
                        templateUrl: 'dev/forum/forum.html',
                        styleUrls: ['assets/scss/forum.scss'],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/register', name: 'Register', component: register_component_1.RegisterComponent },
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], ForumComponent);
                return ForumComponent;
            }());
            exports_1("ForumComponent", ForumComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcnVtL2ZvcnVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCQTtnQkFBQTtnQkFFQSxDQUFDO2dCQWREO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7d0JBQ25DLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO3dCQUNyQyxVQUFVLEVBQUUsQ0FBQyxxQ0FBaUIsQ0FBQztxQkFDbEMsQ0FBQztvQkFDRCwrQkFBVyxDQUFDO3dCQUNULEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBQzt3QkFDbkUsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7d0JBQzFELEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7cUJBRTlFLENBQUM7O2tDQUFBO2dCQUdGLHFCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCwyQ0FFQyxDQUFBIiwiZmlsZSI6ImZvcnVtL2ZvcnVtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZFwiO1xuaW1wb3J0IHtSZWdpc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vcmVnaXN0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tIFwiLi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1mb3J1bScsXG4gICAgdGVtcGxhdGVVcmw6ICdkZXYvZm9ydW0vZm9ydW0uaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2Fzc2V0cy9zY3NzL2ZvcnVtLnNjc3MnXSxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgICB7cGF0aDogJy9yZWdpc3RlcicsIG5hbWU6ICdSZWdpc3RlcicsIGNvbXBvbmVudDogUmVnaXN0ZXJDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnL2xvZ2luJywgbmFtZTogJ0xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvaG9tZScsIG5hbWU6ICdIb21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6IHRydWV9XG5cbl0pXG5leHBvcnQgY2xhc3MgRm9ydW1Db21wb25lbnQge1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
