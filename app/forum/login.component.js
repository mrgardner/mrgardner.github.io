System.register(["@angular/router-deprecated", "@angular/core", '@angular/common', "./user.service"], function(exports_1, context_1) {
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
    var router_deprecated_1, core_1, common_1, user_service_1;
    var LoginComponent;
    return {
        setters:[
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_formBuilder, _userService) {
                    this._formBuilder = _formBuilder;
                    this._userService = _userService;
                    this.loginForm = common_1.ControlGroup;
                    this.user = { firstName: '', lastName: '', email: '', password: '', username: '' };
                }
                LoginComponent.prototype.onSubmit = function () {
                    // this.user = this.loginForm.value;
                };
                LoginComponent.prototype.ngOnInit = function () {
                    this.loginForm = this._formBuilder.group({
                        'password': ['', common_1.Validators.required],
                        'username': ['', common_1.Validators.required],
                    });
                };
                LoginComponent.prototype.createUser = function (firstName, lastName, email, password, username) {
                    var data = {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: password,
                        username: username
                    };
                    this._userService.createUser(data, username);
                };
                // getUser(username: string) {
                //     this._userService.getUser(username);
                //    }
                LoginComponent.prototype.getAuth = function (username, passsord) {
                    console.log(username);
                    var user = this._userService.getUser(username);
                    console.log(user);
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'my-forum-login',
                        templateUrl: 'dev/forum/login.html',
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, user_service_1.UserService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcnVtL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUtJLHdCQUFvQixZQUF5QixFQUFTLFlBQXlCO29CQUEzRCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFKL0UsY0FBUyxHQUFHLHFCQUFZLENBQUM7b0JBQ3pCLFNBQUksR0FBRyxFQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBQyxDQUFDO2dCQUdNLENBQUM7Z0JBRW5GLGlDQUFRLEdBQVI7b0JBQ0ksb0NBQW9DO2dCQUN4QyxDQUFDO2dCQUVELGlDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQzt3QkFDakMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUNyQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7cUJBQ3hDLENBQ0osQ0FBQztnQkFDTixDQUFDO2dCQUVNLG1DQUFVLEdBQWpCLFVBQW1CLFNBQWlCLEVBQUUsUUFBZ0IsRUFBRSxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxRQUFnQjtvQkFDckcsSUFBTSxJQUFJLEdBQUc7d0JBQ1QsU0FBUyxFQUFFLFNBQVM7d0JBQ3BCLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixLQUFLLEVBQUUsS0FBSzt3QkFDWixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLFFBQVE7cUJBRXJCLENBQUM7b0JBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUNqRCxDQUFDO2dCQUdBLDhCQUE4QjtnQkFDOUIsMkNBQTJDO2dCQUMzQyxPQUFPO2dCQUdSLGdDQUFPLEdBQVAsVUFBUyxRQUFnQixFQUFFLFFBQWdCO29CQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN0QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFdEIsQ0FBQztnQkFoREw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixXQUFXLEVBQUUsc0JBQXNCO3dCQUNuQyxVQUFVLEVBQUUsQ0FBQyxxQ0FBaUIsQ0FBQzt3QkFDL0IsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztxQkFDM0IsQ0FBQzs7a0NBQUE7Z0JBNkNGLHFCQUFDO1lBQUQsQ0E1Q0EsQUE0Q0MsSUFBQTtZQTVDRCwyQ0E0Q0MsQ0FBQSIsImZpbGUiOiJmb3J1bS9sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWRcIjtcbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIFZhbGlkYXRvcnMsIENvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tIFwiLi91c2VyLnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktZm9ydW0tbG9naW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnZGV2L2ZvcnVtL2xvZ2luLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBsb2dpbkZvcm0gPSBDb250cm9sR3JvdXA7XG4gICAgdXNlciA9IHtmaXJzdE5hbWU6ICcnLCBsYXN0TmFtZTogJycsIGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnLCB1c2VybmFtZTogJyd9O1xuICAgIHJlc3BvbnNlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHB1YmxpYyBfdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxuXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICAgIC8vIHRoaXMudXNlciA9IHRoaXMubG9naW5Gb3JtLnZhbHVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6YW55IHtcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICAgICAgJ3Bhc3N3b3JkJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgICAgICAndXNlcm5hbWUnOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVVc2VyIChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZywgZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgdXNlcm5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgZmlyc3ROYW1lOiBmaXJzdE5hbWUsXG4gICAgICAgICAgICBsYXN0TmFtZTogbGFzdE5hbWUsXG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWVcblxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl91c2VyU2VydmljZS5jcmVhdGVVc2VyKGRhdGEsIHVzZXJuYW1lKTtcbiAgICB9XG5cblxuICAgICAvLyBnZXRVc2VyKHVzZXJuYW1lOiBzdHJpbmcpIHtcbiAgICAgLy8gICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmdldFVzZXIodXNlcm5hbWUpO1xuICAgICAvLyAgICB9XG5cblxuICAgIGdldEF1dGggKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3Nzb3JkOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2codXNlcm5hbWUpO1xuICAgICAgICB2YXIgdXNlciA9IHRoaXMuX3VzZXJTZXJ2aWNlLmdldFVzZXIodXNlcm5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcblxuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
