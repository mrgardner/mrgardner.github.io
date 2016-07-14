System.register(["@angular/core", "@angular/router-deprecated", "./register.component"], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, register_component_1;
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
                        { path: '/', name: 'Register', component: register_component_1.RegisterComponent, useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], ForumComponent);
                return ForumComponent;
            }());
            exports_1("ForumComponent", ForumComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcnVtL2ZvcnVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUFBO2dCQUVBLENBQUM7Z0JBWkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsV0FBVyxFQUFFLHNCQUFzQjt3QkFDbkMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7d0JBQ3JDLFVBQVUsRUFBRSxDQUFDLHFDQUFpQixDQUFDO3FCQUNsQyxDQUFDO29CQUNELCtCQUFXLENBQUM7d0JBQ1QsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7cUJBRWxGLENBQUM7O2tDQUFBO2dCQUdGLHFCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCwyQ0FFQyxDQUFBIiwiZmlsZSI6ImRldi9mb3J1bS9mb3J1bS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWRcIjtcbmltcG9ydCB7UmVnaXN0ZXJDb21wb25lbnR9IGZyb20gXCIuL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWZvcnVtJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2Rldi9mb3J1bS9mb3J1bS5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnYXNzZXRzL3Njc3MvZm9ydW0uc2NzcyddLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5AUm91dGVDb25maWcoW1xuICAgIHtwYXRoOiAnLycsIG5hbWU6ICdSZWdpc3RlcicsIGNvbXBvbmVudDogUmVnaXN0ZXJDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX1cblxuXSlcbmV4cG9ydCBjbGFzcyBGb3J1bUNvbXBvbmVudCB7XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
