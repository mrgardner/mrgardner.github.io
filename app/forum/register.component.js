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
    function validateTextLength(control) {
        if (control.value.length < 6 || control.value.length === 0) {
            console.log('BINGO');
            return { invalidLength: true };
        }
        console.log(control.value.length);
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
                        'password': ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                validateTextLength
                            ])],
                        'confirmPassword': ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                validateTextLength
                            ])],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcnVtL3JlZ2lzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQTBEQSx1QkFBdUIsT0FBZ0I7UUFDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQywrRUFBK0UsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RyxNQUFNLENBQUMsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDaEMsQ0FBQztJQUNMLENBQUM7SUFFRCwwQkFBMEIsV0FBbUIsRUFBRSxrQkFBMEI7UUFDckUsTUFBTSxDQUFDLFVBQUMsS0FBbUI7WUFDdkIsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMzQyxJQUFJLGVBQWUsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFFekQsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDM0MsTUFBTSxDQUFDO29CQUNILG1CQUFtQixFQUFFLElBQUk7aUJBQzVCLENBQUM7WUFDTixDQUFDO1FBQ0wsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQUVELDRCQUE2QixPQUFnQjtRQUN6QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxFQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUNqQyxDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7Ozs7Ozs7Ozs7WUExRUQ7Z0JBS0ksMkJBQW9CLFlBQXlCLEVBQVUsWUFBeUI7b0JBQTVELGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUpoRixpQkFBWSxHQUFHLHFCQUFZLENBQUM7b0JBQzVCLFNBQUksR0FBRyxFQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBQyxDQUFDO2dCQUdPLENBQUM7Z0JBRXBGLG9DQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztnQkFDeEMsQ0FBQztnQkFFRCxvQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7d0JBQ3hDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDdEMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUNyQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUM7Z0NBQzdCLG1CQUFVLENBQUMsUUFBUTtnQ0FDbkIsYUFBYTs2QkFDaEIsQ0FBQyxDQUFDO3dCQUNILFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQztnQ0FDaEMsbUJBQVUsQ0FBQyxRQUFRO2dDQUNuQixrQkFBa0I7NkJBQ3JCLENBQUMsQ0FBQzt3QkFDSCxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQztnQ0FDdkMsbUJBQVUsQ0FBQyxRQUFRO2dDQUNuQixrQkFBa0I7NkJBQ3JCLENBQUMsQ0FBQzt3QkFDSCxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7cUJBQ3hDLEVBQUUsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLEVBQUMsQ0FDOUQsQ0FBQztnQkFDTixDQUFDO2dCQUVELHNDQUFVLEdBQVYsVUFBWSxTQUFpQixFQUFFLFFBQWdCLEVBQUUsS0FBYSxFQUFFLFFBQWdCLEVBQUUsUUFBZ0I7b0JBQzlGLElBQU0sSUFBSSxHQUFHO3dCQUNULFNBQVMsRUFBRSxTQUFTO3dCQUNwQixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsS0FBSyxFQUFFLEtBQUs7d0JBQ1osUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxRQUFRO3FCQUVyQixDQUFDO29CQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDakQsQ0FBQztnQkFFRCxtQ0FBTyxHQUFQLFVBQVMsSUFBWTtvQkFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBcERMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjt3QkFDN0IsV0FBVyxFQUFFLHlCQUF5Qjt3QkFDdEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7d0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7cUJBQzNCLENBQUM7O3FDQUFBO2dCQWdERix3QkFBQztZQUFELENBL0NBLEFBK0NDLElBQUE7WUEvQ0QsaURBK0NDLENBQUEiLCJmaWxlIjoiZm9ydW0vcmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cCwgVmFsaWRhdG9ycywgQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuL3VzZXIuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1mb3J1bS1yZWdpc3RlcicsXG4gICAgdGVtcGxhdGVVcmw6ICdkZXYvZm9ydW0vcmVnaXN0ZXIuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2Fzc2V0cy9zY3NzL3JlZ2lzdGVyLnNjc3MnXSxcbiAgICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgcmVnaXN0ZXJGb3JtID0gQ29udHJvbEdyb3VwO1xuICAgIHVzZXIgPSB7Zmlyc3ROYW1lOiAnJywgbGFzdE5hbWU6ICcnLCBlbWFpbDogJycsIHBhc3N3b3JkOiAnJywgdXNlcm5hbWU6ICcnfTtcbiAgICByZXNwb25zZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHt9XG5cbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy5yZWdpc3RlckZvcm0udmFsdWU7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTphbnkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgICdmaXJzdE5hbWUnOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgJ2xhc3ROYW1lJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgICdlbWFpbCc6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlRW1haWxcbiAgICAgICAgICAgIF0pXSxcbiAgICAgICAgICAgICdwYXNzd29yZCc6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlVGV4dExlbmd0aFxuICAgICAgICAgICAgXSldLFxuICAgICAgICAgICAgJ2NvbmZpcm1QYXNzd29yZCc6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlVGV4dExlbmd0aFxuICAgICAgICAgICAgXSldLFxuICAgICAgICAgICAgJ3VzZXJuYW1lJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgfSwge3ZhbGlkYXRvcjogdmFsaWRhdGVQYXNzd29yZCgncGFzc3dvcmQnLCAnY29uZmlybVBhc3N3b3JkJyl9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY3JlYXRlVXNlciAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIHVzZXJuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogZmlyc3ROYW1lLFxuICAgICAgICAgICAgbGFzdE5hbWU6IGxhc3ROYW1lLFxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lXG5cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UuY3JlYXRlVXNlcihkYXRhLCB1c2VybmFtZSk7XG4gICAgfVxuXG4gICAgZ2V0VXNlciAodXNlcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmdldFVzZXIodXNlcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGNvbnRyb2w6IENvbnRyb2wpOiB7W3M6IHN0cmluZ106IGJvb2xlYW59IHtcbiAgICBpZiAoIWNvbnRyb2wudmFsdWUubWF0Y2goJygoW2Etel0pfChbQS1aXSl8KFsuXSl8KFtfXSkpK0ArKChbYS16XSl8KFtBLVpdKSkrKFsuXSkrKChbYS16XSl8KFtBLVpdKSl7Mix9JykpIHtcbiAgICAgICAgcmV0dXJuIHtpbnZhbGlkRW1haWw6IHRydWV9O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZEtleTogc3RyaW5nLCBjb25maXJtUGFzc3dvcmRLZXk6IHN0cmluZykge1xuICAgIHJldHVybiAoZ3JvdXA6IENvbnRyb2xHcm91cCk6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0+IHtcbiAgICAgICAgbGV0IHBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbcGFzc3dvcmRLZXldO1xuICAgICAgICBsZXQgY29uZmlybVBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbY29uZmlybVBhc3N3b3JkS2V5XTtcblxuICAgICAgICBpZiAocGFzc3dvcmQudmFsdWUgIT09IGNvbmZpcm1QYXNzd29yZC52YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtaXNtYXRjaGVkUGFzc3dvcmRzOiB0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRleHRMZW5ndGggKGNvbnRyb2w6IENvbnRyb2wpOiB7W3M6IHN0cmluZ106IGJvb2xlYW59IHtcbiAgICBpZiAoY29udHJvbC52YWx1ZS5sZW5ndGggPCA2IHx8IGNvbnRyb2wudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdCSU5HTycpO1xuICAgICAgICByZXR1cm4ge2ludmFsaWRMZW5ndGg6IHRydWV9O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhjb250cm9sLnZhbHVlLmxlbmd0aCk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
