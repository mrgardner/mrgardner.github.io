System.register(["@angular/core", '@angular/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var RegisterComponent;
    function validateEmail(control) {
        if (!control.value.match('(([a-z])|([A-Z])|([.])|([_]))+@+(([a-z])|([A-Z]))+([.])+(([a-z])|([A-Z])){2,}')) {
            return { invalidEmail: true };
        }
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            RegisterComponent = (function () {
                function RegisterComponent(_formBuilder) {
                    this._formBuilder = _formBuilder;
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
                    });
                };
                RegisterComponent = __decorate([
                    core_1.Component({
                        selector: 'my-forum-register',
                        templateUrl: 'dev/forum/register.html',
                        styleUrls: ['assets/scss/register.scss']
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_1("RegisterComponent", RegisterComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcnVtL3JlZ2lzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQWlDQSx1QkFBdUIsT0FBZ0I7UUFDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQywrRUFBK0UsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RyxNQUFNLENBQUMsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDaEMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7Ozs7WUE5QkQ7Z0JBSUksMkJBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFIN0MsaUJBQVksR0FBRyxxQkFBWSxDQUFDO29CQUM1QixTQUFJLEdBQUcsRUFBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFDLENBQUM7Z0JBRWQsQ0FBQztnQkFFakQsb0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2dCQUN4QyxDQUFDO2dCQUVELG9DQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQzt3QkFDeEMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUN0QyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3JDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQztnQ0FDN0IsbUJBQVUsQ0FBQyxRQUFRO2dDQUNuQixhQUFhOzZCQUNoQixDQUFDLENBQUM7d0JBQ0gsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUNyQyxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztxQkFHL0MsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBNUJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjt3QkFDN0IsV0FBVyxFQUFFLHlCQUF5Qjt3QkFDdEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7cUJBQzNDLENBQUM7O3FDQUFBO2dCQXlCRix3QkFBQztZQUFELENBeEJBLEFBd0JDLElBQUE7WUF4QkQsaURBd0JDLENBQUEiLCJmaWxlIjoiZm9ydW0vcmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cCwgVmFsaWRhdG9ycywgQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktZm9ydW0tcmVnaXN0ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnZGV2L2ZvcnVtL3JlZ2lzdGVyLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydhc3NldHMvc2Nzcy9yZWdpc3Rlci5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgcmVnaXN0ZXJGb3JtID0gQ29udHJvbEdyb3VwO1xuICAgIHVzZXIgPSB7Zmlyc3ROYW1lOiAnJywgbGFzdE5hbWU6ICcnLCBlbWFpbDogJycsIHBhc3N3b3JkOiAnJ307XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy5yZWdpc3RlckZvcm0udmFsdWU7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTphbnkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgICdmaXJzdE5hbWUnOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgJ2xhc3ROYW1lJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgICdlbWFpbCc6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlRW1haWxcbiAgICAgICAgICAgIF0pXSxcbiAgICAgICAgICAgICdwYXNzd29yZCc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICAnY29uZmlybVBhc3N3b3JkJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcblxuXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChjb250cm9sOiBDb250cm9sKToge1tzOiBzdHJpbmddOiBib29sZWFufSB7XG4gICAgaWYgKCFjb250cm9sLnZhbHVlLm1hdGNoKCcoKFthLXpdKXwoW0EtWl0pfChbLl0pfChbX10pKStAKygoW2Etel0pfChbQS1aXSkpKyhbLl0pKygoW2Etel0pfChbQS1aXSkpezIsfScpKSB7XG4gICAgICAgIHJldHVybiB7aW52YWxpZEVtYWlsOiB0cnVlfTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
