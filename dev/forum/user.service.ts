import {Injectable} from "@angular/core";

@Injectable()
export class UserService {

    getdata() {
        return this._http.get('https://personal-site-85a8a.firebaseio.com/user/-KM5WtNX-y8SmvImmPg0.json')
            .map(response => response.json());
    }

    createUser (data: any, username: string) {
        var fireBase = new Firebase('https://personal-site-85a8a.firebaseio.com');
        var dataRef = fireBase.child("user");
        dataRef.child(username).update(data);
    }

    getAllUsers() {

    }

    getUser(id: string) {
        var fireBase = new Firebase('https://personal-site-85a8a.firebaseio.com');
        fireBase.child('user').child(id).on("value", function(snapshot){
            console.log(snapshot.val());
        })
    }
}