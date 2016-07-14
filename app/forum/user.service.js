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
                UserService.prototype.createUser = function (data, username) {
                    var fireBase = new Firebase('https://personal-site-85a8a.firebaseio.com');
                    var dataRef = fireBase.child("user");
                    dataRef.child(username).update(data);
                };
                UserService.prototype.getAllUsers = function () {
                };
                UserService.prototype.getUser = function (id) {
                    var test = '';
                    var fireBase = new Firebase('https://personal-site-85a8a.firebaseio.com');
                    fireBase.child('user').child(id).on("value", function (snapshot) {
                        console.log(snapshot.val());
                        console.log('return object');
                        var data = snapshot.val();
                        test = data.username;
                    });
                    return test;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcnVtL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUFBO2dCQXdCQSxDQUFDO2dCQXRCRyxnQ0FBVSxHQUFWLFVBQVksSUFBUyxFQUFFLFFBQWdCO29CQUNuQyxJQUFJLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO29CQUMxRSxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNyQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekMsQ0FBQztnQkFFRCxpQ0FBVyxHQUFYO2dCQUVBLENBQUM7Z0JBRUEsNkJBQU8sR0FBUCxVQUFTLEVBQVU7b0JBQ2YsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO29CQUNkLElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLDRDQUE0QyxDQUFDLENBQUM7b0JBQzFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxRQUFRO3dCQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO3dCQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO3dCQUM3QixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQzFCLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUN6QixDQUFDLENBQUMsQ0FBQztvQkFFUCxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO2dCQXhCTDtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkF5QmIsa0JBQUM7WUFBRCxDQXhCQSxBQXdCQyxJQUFBO1lBeEJELHFDQXdCQyxDQUFBIiwiZmlsZSI6ImZvcnVtL3VzZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcblxuICAgIGNyZWF0ZVVzZXIgKGRhdGE6IGFueSwgdXNlcm5hbWU6IHN0cmluZykge1xuICAgICAgICB2YXIgZmlyZUJhc2UgPSBuZXcgRmlyZWJhc2UoJ2h0dHBzOi8vcGVyc29uYWwtc2l0ZS04NWE4YS5maXJlYmFzZWlvLmNvbScpO1xuICAgICAgICB2YXIgZGF0YVJlZiA9IGZpcmVCYXNlLmNoaWxkKFwidXNlclwiKTtcbiAgICAgICAgZGF0YVJlZi5jaGlsZCh1c2VybmFtZSkudXBkYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIGdldEFsbFVzZXJzKCkge1xuXG4gICAgfVxuXG4gICAgIGdldFVzZXIgKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgIHZhciB0ZXN0ID0gJyc7XG4gICAgICAgICB2YXIgZmlyZUJhc2UgPSBuZXcgRmlyZWJhc2UoJ2h0dHBzOi8vcGVyc29uYWwtc2l0ZS04NWE4YS5maXJlYmFzZWlvLmNvbScpO1xuICAgICAgICAgZmlyZUJhc2UuY2hpbGQoJ3VzZXInKS5jaGlsZChpZCkub24oXCJ2YWx1ZVwiLCBmdW5jdGlvbiAoc25hcHNob3QpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzbmFwc2hvdC52YWwoKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JldHVybiBvYmplY3QnKTtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHNuYXBzaG90LnZhbCgpO1xuICAgICAgICAgICAgICAgIHRlc3QgPSBkYXRhLnVzZXJuYW1lO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRlc3Q7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
