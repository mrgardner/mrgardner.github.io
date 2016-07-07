System.register(["@angular/core", '@angular/common', "./user.service"], function(exports_1, context_1) {
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
    var core_1, common_1, user_service_1;
    var RegisterComponent;
    function validateEmail(control) {
        if (!control.value.match('(([a-z])|([A-Z])|([.])|([_]))+@+(([a-z])|([A-Z]))+([.])+(([a-z])|([A-Z])){2,}')) {
            return { invalidEmail: true };
        }
    }
    function validatePassword(passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    }
    return {
        setters:[
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
            RegisterComponent = (function () {
                function RegisterComponent(_formBuilder, _userService) {
                    this._formBuilder = _formBuilder;
                    this._userService = _userService;
                    this.registerForm = common_1.ControlGroup;
                    this.user = { firstName: '', lastName: '', email: '', password: '', username: '' };
                }
                RegisterComponent.prototype.onSubmit = function () {
                    this.user = this.registerForm.value;
                };
                RegisterComponent.prototype.ngOnInit = function () {
                    this.registerForm = this._formBuilder.group({
                        'firstName': ['', common_1.Validators.required],
                        'lastName': ['', common_1.Validators.required],
                        'email': ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                validateEmail
                            ])],
                        'password': ['', common_1.Validators.required],
                        'confirmPassword': ['', common_1.Validators.required],
                        'username': ['', common_1.Validators.required],
                    }, { validator: validatePassword('password', 'confirmPassword') });
                };
                RegisterComponent.prototype.createUser = function (firstName, lastName, email, password, username) {
                    var data = {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: password,
                        username: username
                    };
                    this._userService.createUser(data, username);
                };
                RegisterComponent.prototype.getUser = function (user) {
                    this._userService.getUser(user);
                };
                RegisterComponent = __decorate([
                    core_1.Component({
                        selector: 'my-forum-register',
                        templateUrl: 'dev/forum/register.html',
                        styleUrls: ['assets/scss/register.scss'],
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, user_service_1.UserService])
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_1("RegisterComponent", RegisterComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcnVtL3JlZ2lzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQW9EQSx1QkFBdUIsT0FBZ0I7UUFDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQywrRUFBK0UsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RyxNQUFNLENBQUMsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDaEMsQ0FBQztJQUNMLENBQUM7SUFFRCwwQkFBMEIsV0FBbUIsRUFBRSxrQkFBMEI7UUFDckUsTUFBTSxDQUFDLFVBQUMsS0FBbUI7WUFDdkIsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMzQyxJQUFJLGVBQWUsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFFekQsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDM0MsTUFBTSxDQUFDO29CQUNILG1CQUFtQixFQUFFLElBQUk7aUJBQzVCLENBQUM7WUFDTixDQUFDO1FBQ0wsQ0FBQyxDQUFBO0lBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7OztZQTVERDtnQkFLSSwyQkFBb0IsWUFBeUIsRUFBVSxZQUF5QjtvQkFBNUQsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBSmhGLGlCQUFZLEdBQUcscUJBQVksQ0FBQztvQkFDNUIsU0FBSSxHQUFHLEVBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFDLENBQUM7Z0JBR08sQ0FBQztnQkFFcEYsb0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2dCQUN4QyxDQUFDO2dCQUVELG9DQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQzt3QkFDeEMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUN0QyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3JDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQztnQ0FDN0IsbUJBQVUsQ0FBQyxRQUFRO2dDQUNuQixhQUFhOzZCQUNoQixDQUFDLENBQUM7d0JBQ0gsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUNyQyxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDNUMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3FCQUN4QyxFQUFFLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxFQUFDLENBQzlELENBQUM7Z0JBQ04sQ0FBQztnQkFFRCxzQ0FBVSxHQUFWLFVBQVksU0FBaUIsRUFBRSxRQUFnQixFQUFFLEtBQWEsRUFBRSxRQUFnQixFQUFFLFFBQWdCO29CQUM5RixJQUFNLElBQUksR0FBRzt3QkFDVCxTQUFTLEVBQUUsU0FBUzt3QkFDcEIsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLEtBQUssRUFBRSxLQUFLO3dCQUNaLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsUUFBUTtxQkFFckIsQ0FBQztvQkFDRixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ2pELENBQUM7Z0JBRUQsbUNBQU8sR0FBUCxVQUFTLElBQVk7b0JBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQTlDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFdBQVcsRUFBRSx5QkFBeUI7d0JBQ3RDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO3dCQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO3FCQUMzQixDQUFDOztxQ0FBQTtnQkEwQ0Ysd0JBQUM7WUFBRCxDQXpDQSxBQXlDQyxJQUFBO1lBekNELGlEQXlDQyxDQUFBIiwiZmlsZSI6ImZvcnVtL3JlZ2lzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIFZhbGlkYXRvcnMsIENvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tIFwiLi91c2VyLnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktZm9ydW0tcmVnaXN0ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnZGV2L2ZvcnVtL3JlZ2lzdGVyLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydhc3NldHMvc2Nzcy9yZWdpc3Rlci5zY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIHJlZ2lzdGVyRm9ybSA9IENvbnRyb2xHcm91cDtcbiAgICB1c2VyID0ge2ZpcnN0TmFtZTogJycsIGxhc3ROYW1lOiAnJywgZW1haWw6ICcnLCBwYXNzd29yZDogJycsIHVzZXJuYW1lOiAnJ307XG4gICAgcmVzcG9uc2U6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBfdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxuXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6YW55IHtcbiAgICAgICAgdGhpcy5yZWdpc3RlckZvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICAnZmlyc3ROYW1lJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgICdsYXN0TmFtZSc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICAnZW1haWwnOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUVtYWlsXG4gICAgICAgICAgICBdKV0sXG4gICAgICAgICAgICAncGFzc3dvcmQnOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgJ2NvbmZpcm1QYXNzd29yZCc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICAndXNlcm5hbWUnOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICB9LCB7dmFsaWRhdG9yOiB2YWxpZGF0ZVBhc3N3b3JkKCdwYXNzd29yZCcsICdjb25maXJtUGFzc3dvcmQnKX1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjcmVhdGVVc2VyIChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZywgZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgdXNlcm5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgZmlyc3ROYW1lOiBmaXJzdE5hbWUsXG4gICAgICAgICAgICBsYXN0TmFtZTogbGFzdE5hbWUsXG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWVcblxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl91c2VyU2VydmljZS5jcmVhdGVVc2VyKGRhdGEsIHVzZXJuYW1lKTtcbiAgICB9XG5cbiAgICBnZXRVc2VyICh1c2VyOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UuZ2V0VXNlcih1c2VyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoY29udHJvbDogQ29udHJvbCk6IHtbczogc3RyaW5nXTogYm9vbGVhbn0ge1xuICAgIGlmICghY29udHJvbC52YWx1ZS5tYXRjaCgnKChbYS16XSl8KFtBLVpdKXwoWy5dKXwoW19dKSkrQCsoKFthLXpdKXwoW0EtWl0pKSsoWy5dKSsoKFthLXpdKXwoW0EtWl0pKXsyLH0nKSkge1xuICAgICAgICByZXR1cm4ge2ludmFsaWRFbWFpbDogdHJ1ZX07XG4gICAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkS2V5OiBzdHJpbmcsIGNvbmZpcm1QYXNzd29yZEtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChncm91cDogQ29udHJvbEdyb3VwKToge1trZXk6IHN0cmluZ106IGFueX0gPT4ge1xuICAgICAgICBsZXQgcGFzc3dvcmQgPSBncm91cC5jb250cm9sc1twYXNzd29yZEtleV07XG4gICAgICAgIGxldCBjb25maXJtUGFzc3dvcmQgPSBncm91cC5jb250cm9sc1tjb25maXJtUGFzc3dvcmRLZXldO1xuXG4gICAgICAgIGlmIChwYXNzd29yZC52YWx1ZSAhPT0gY29uZmlybVBhc3N3b3JkLnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG1pc21hdGNoZWRQYXNzd29yZHM6IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
