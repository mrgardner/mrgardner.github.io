import {Injectable} from "@angular/core";

@Injectable()
export class UserService {

    createUser (data: any, username: string) {
        var fireBase = new Firebase('https://personal-site-85a8a.firebaseio.com');
        var dataRef = fireBase.child("user");
        dataRef.child(username).update(data);
    }

    getAllUsers() {

    }

     getUser (id: string) {
         var test = '';
         var fireBase = new Firebase('https://personal-site-85a8a.firebaseio.com');
         fireBase.child('user').child(id).on("value", function (snapshot) {
                console.log(snapshot.val());
                console.log('return object');
                var data = snapshot.val();
                test = data.username;
            });

        return test;
    }
}