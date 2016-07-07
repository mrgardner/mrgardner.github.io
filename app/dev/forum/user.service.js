System.register(["@angular/core", "@angular/http", 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            UserService = (function () {
                function UserService(_http) {
                    this._http = _http;
                }
                UserService.prototype.postData = function (data) {
                    var fireBase = new Firebase('https://personal-site-85a8a.firebaseio.com/user');
                    var body = JSON.stringify(data);
                    // const headers = new Headers();
                    // headers.append('Content-Type', 'application/json');
                    // return this._http.post('https://personal-site-85a8a.firebaseio.com/user.json', body, {headers: headers})
                    //     .map(response => response.json());
                    var testData = fireBase.push();
                    testData.set(body);
                };
                UserService.prototype.getdata = function () {
                    return this._http.get('https://personal-site-85a8a.firebaseio.com/user/-KM5WtNX-y8SmvImmPg0.json')
                        .map(function (response) { return response.json(); });
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcnVtL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFDSSxxQkFBb0IsS0FBVztvQkFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO2dCQUFHLENBQUM7Z0JBRW5DLDhCQUFRLEdBQVIsVUFBUyxJQUFTO29CQUNkLElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLGlEQUFpRCxDQUFDLENBQUM7b0JBQy9FLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xDLGlDQUFpQztvQkFDakMsc0RBQXNEO29CQUN0RCwyR0FBMkc7b0JBQzNHLHlDQUF5QztvQkFFekMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUMvQixRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QixDQUFDO2dCQUVELDZCQUFPLEdBQVA7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLDJFQUEyRSxDQUFDO3lCQUM3RixHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBbkJMO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQW9CYixrQkFBQztZQUFELENBbkJBLEFBbUJDLElBQUE7WUFuQkQscUNBbUJDLENBQUEiLCJmaWxlIjoiZGV2L2ZvcnVtL3VzZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQge0ZpcmViYXNlU2VydmljZX0gZnJvbSAnZmlyZWJhc2UtYW5ndWxhcjIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cblxuICAgIHBvc3REYXRhKGRhdGE6IGFueSkge1xuICAgICAgICB2YXIgZmlyZUJhc2UgPSBuZXcgRmlyZWJhc2UoJ2h0dHBzOi8vcGVyc29uYWwtc2l0ZS04NWE4YS5maXJlYmFzZWlvLmNvbS91c2VyJyk7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgLy8gY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIC8vIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwczovL3BlcnNvbmFsLXNpdGUtODVhOGEuZmlyZWJhc2Vpby5jb20vdXNlci5qc29uJywgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuICAgICAgICAvLyAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuXG4gICAgICAgIHZhciB0ZXN0RGF0YSA9IGZpcmVCYXNlLnB1c2goKTtcbiAgICAgICAgdGVzdERhdGEuc2V0KGJvZHkpO1xuICAgIH1cblxuICAgIGdldGRhdGEoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwczovL3BlcnNvbmFsLXNpdGUtODVhOGEuZmlyZWJhc2Vpby5jb20vdXNlci8tS001V3ROWC15OFNtdkltbVBnMC5qc29uJylcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
