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
                    this.user = { firstName: '', lastName: '', email: '', password: '' };
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
                    }, { validator: validatePassword('password', 'confirmPassword') });
                };
                RegisterComponent.prototype.onPost = function (firstName, lastName, email, password) {
                    var data = {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: password
                    };
                    this._userService.postData(data);
                };
                RegisterComponent.prototype.onGetPosts = function () {
                    var _this = this;
                    this._userService.getdata()
                        .subscribe(function (data) {
                        console.log(data);
                        _this.response = JSON.stringify(data);
                    }, function (error) { return console.log(error); });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcnVtL3JlZ2lzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQXlEQSx1QkFBdUIsT0FBZ0I7UUFDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQywrRUFBK0UsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RyxNQUFNLENBQUMsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDaEMsQ0FBQztJQUNMLENBQUM7SUFFRCwwQkFBMEIsV0FBbUIsRUFBRSxrQkFBMEI7UUFDckUsTUFBTSxDQUFDLFVBQUMsS0FBbUI7WUFDdkIsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMzQyxJQUFJLGVBQWUsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFFekQsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDM0MsTUFBTSxDQUFDO29CQUNILG1CQUFtQixFQUFFLElBQUk7aUJBQzVCLENBQUM7WUFDTixDQUFDO1FBQ0wsQ0FBQyxDQUFBO0lBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7OztZQWpFRDtnQkFLSSwyQkFBb0IsWUFBeUIsRUFBVSxZQUF5QjtvQkFBNUQsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBSmhGLGlCQUFZLEdBQUcscUJBQVksQ0FBQztvQkFDNUIsU0FBSSxHQUFHLEVBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBQyxDQUFDO2dCQUdxQixDQUFDO2dCQUVwRixvQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7Z0JBQ3hDLENBQUM7Z0JBRUQsb0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO3dCQUN4QyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3RDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDckMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsT0FBTyxDQUFDO2dDQUM3QixtQkFBVSxDQUFDLFFBQVE7Z0NBQ25CLGFBQWE7NkJBQ2hCLENBQUMsQ0FBQzt3QkFDSCxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3JDLGlCQUFpQixFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3FCQUMvQyxFQUFFLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxFQUFDLENBQzlELENBQUM7Z0JBQ04sQ0FBQztnQkFFRCxrQ0FBTSxHQUFOLFVBQU8sU0FBaUIsRUFBRSxRQUFnQixFQUFFLEtBQWEsRUFBRSxRQUFnQjtvQkFDdkUsSUFBTSxJQUFJLEdBQUc7d0JBQ1QsU0FBUyxFQUFFLFNBQVM7d0JBQ3BCLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixLQUFLLEVBQUUsS0FBSzt3QkFDWixRQUFRLEVBQUUsUUFBUTtxQkFFckIsQ0FBQztvQkFDRixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckMsQ0FBQztnQkFFRCxzQ0FBVSxHQUFWO29CQUFBLGlCQVNDO29CQVJHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO3lCQUN0QixTQUFTLENBQ04sVUFBQSxJQUFJO3dCQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2xCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDekMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDOUIsQ0FBQTtnQkFDVCxDQUFDO2dCQW5ETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFdBQVcsRUFBRSx5QkFBeUI7d0JBQ3RDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO3dCQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO3FCQUMzQixDQUFDOztxQ0FBQTtnQkErQ0Ysd0JBQUM7WUFBRCxDQTlDQSxBQThDQyxJQUFBO1lBOUNELGlEQThDQyxDQUFBIiwiZmlsZSI6ImRldi9mb3J1bS9yZWdpc3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgQ29udHJvbEdyb3VwLCBWYWxpZGF0b3JzLCBDb250cm9sfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4vdXNlci5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWZvcnVtLXJlZ2lzdGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2Rldi9mb3J1bS9yZWdpc3Rlci5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnYXNzZXRzL3Njc3MvcmVnaXN0ZXIuc2NzcyddLFxuICAgIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICByZWdpc3RlckZvcm0gPSBDb250cm9sR3JvdXA7XG4gICAgdXNlciA9IHtmaXJzdE5hbWU6ICcnLCBsYXN0TmFtZTogJycsIGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnfTtcbiAgICByZXNwb25zZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHt9XG5cbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy5yZWdpc3RlckZvcm0udmFsdWU7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTphbnkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgICdmaXJzdE5hbWUnOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgJ2xhc3ROYW1lJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgICdlbWFpbCc6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlRW1haWxcbiAgICAgICAgICAgIF0pXSxcbiAgICAgICAgICAgICdwYXNzd29yZCc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICAnY29uZmlybVBhc3N3b3JkJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgfSwge3ZhbGlkYXRvcjogdmFsaWRhdGVQYXNzd29yZCgncGFzc3dvcmQnLCAnY29uZmlybVBhc3N3b3JkJyl9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25Qb3N0KGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBmaXJzdE5hbWU6IGZpcnN0TmFtZSxcbiAgICAgICAgICAgIGxhc3ROYW1lOiBsYXN0TmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLnBvc3REYXRhKGRhdGEpO1xuICAgIH1cblxuICAgIG9uR2V0UG9zdHMoKSB7XG4gICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmdldGRhdGEoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2UgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChjb250cm9sOiBDb250cm9sKToge1tzOiBzdHJpbmddOiBib29sZWFufSB7XG4gICAgaWYgKCFjb250cm9sLnZhbHVlLm1hdGNoKCcoKFthLXpdKXwoW0EtWl0pfChbLl0pfChbX10pKStAKygoW2Etel0pfChbQS1aXSkpKyhbLl0pKygoW2Etel0pfChbQS1aXSkpezIsfScpKSB7XG4gICAgICAgIHJldHVybiB7aW52YWxpZEVtYWlsOiB0cnVlfTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmRLZXk6IHN0cmluZywgY29uZmlybVBhc3N3b3JkS2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gKGdyb3VwOiBDb250cm9sR3JvdXApOiB7W2tleTogc3RyaW5nXTogYW55fSA9PiB7XG4gICAgICAgIGxldCBwYXNzd29yZCA9IGdyb3VwLmNvbnRyb2xzW3Bhc3N3b3JkS2V5XTtcbiAgICAgICAgbGV0IGNvbmZpcm1QYXNzd29yZCA9IGdyb3VwLmNvbnRyb2xzW2NvbmZpcm1QYXNzd29yZEtleV07XG5cbiAgICAgICAgaWYgKHBhc3N3b3JkLnZhbHVlICE9PSBjb25maXJtUGFzc3dvcmQudmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWlzbWF0Y2hlZFBhc3N3b3JkczogdHJ1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
