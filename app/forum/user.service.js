System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService() {
                }
                UserService.prototype.getdata = function () {
                    return this._http.get('https://personal-site-85a8a.firebaseio.com/user/-KM5WtNX-y8SmvImmPg0.json')
                        .map(function (response) { return response.json(); });
                };
                UserService.prototype.createUser = function (data, username) {
                    var fireBase = new Firebase('https://personal-site-85a8a.firebaseio.com');
                    var dataRef = fireBase.child("user");
                    dataRef.child(username).update(data);
                };
                UserService.prototype.getAllUsers = function () {
                };
                UserService.prototype.getUser = function (id) {
                    var fireBase = new Firebase('https://personal-site-85a8a.firebaseio.com');
                    fireBase.child('user').child(id).on("value", function (snapshot) {
                        console.log(snapshot.val());
                    });
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcnVtL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUFBO2dCQXVCQSxDQUFDO2dCQXJCRyw2QkFBTyxHQUFQO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQywyRUFBMkUsQ0FBQzt5QkFDN0YsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQUVELGdDQUFVLEdBQVYsVUFBWSxJQUFTLEVBQUUsUUFBZ0I7b0JBQ25DLElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLDRDQUE0QyxDQUFDLENBQUM7b0JBQzFFLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3JDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO2dCQUVELGlDQUFXLEdBQVg7Z0JBRUEsQ0FBQztnQkFFRCw2QkFBTyxHQUFQLFVBQVEsRUFBVTtvQkFDZCxJQUFJLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO29CQUMxRSxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVMsUUFBUTt3QkFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztvQkFDaEMsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkF2Qkw7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBd0JiLGtCQUFDO1lBQUQsQ0F2QkEsQUF1QkMsSUFBQTtZQXZCRCxxQ0F1QkMsQ0FBQSIsImZpbGUiOiJmb3J1bS91c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG5cbiAgICBnZXRkYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHBzOi8vcGVyc29uYWwtc2l0ZS04NWE4YS5maXJlYmFzZWlvLmNvbS91c2VyLy1LTTVXdE5YLXk4U212SW1tUGcwLmpzb24nKVxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICAgIH1cblxuICAgIGNyZWF0ZVVzZXIgKGRhdGE6IGFueSwgdXNlcm5hbWU6IHN0cmluZykge1xuICAgICAgICB2YXIgZmlyZUJhc2UgPSBuZXcgRmlyZWJhc2UoJ2h0dHBzOi8vcGVyc29uYWwtc2l0ZS04NWE4YS5maXJlYmFzZWlvLmNvbScpO1xuICAgICAgICB2YXIgZGF0YVJlZiA9IGZpcmVCYXNlLmNoaWxkKFwidXNlclwiKTtcbiAgICAgICAgZGF0YVJlZi5jaGlsZCh1c2VybmFtZSkudXBkYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIGdldEFsbFVzZXJzKCkge1xuXG4gICAgfVxuXG4gICAgZ2V0VXNlcihpZDogc3RyaW5nKSB7XG4gICAgICAgIHZhciBmaXJlQmFzZSA9IG5ldyBGaXJlYmFzZSgnaHR0cHM6Ly9wZXJzb25hbC1zaXRlLTg1YThhLmZpcmViYXNlaW8uY29tJyk7XG4gICAgICAgIGZpcmVCYXNlLmNoaWxkKCd1c2VyJykuY2hpbGQoaWQpLm9uKFwidmFsdWVcIiwgZnVuY3Rpb24oc25hcHNob3Qpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coc25hcHNob3QudmFsKCkpO1xuICAgICAgICB9KVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
