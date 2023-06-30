import { Injectable } from "@angular/core";
import { User } from "src/models/users/user";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const API_URL = 'http://localhost:4300/usuarios';

@Injectable()
export class UserRepository {


constructor(
    private httpClient : HttpClient
) {}


    getUsers(): Observable<User[]> {
        console.log("entra getuser")
        return this.httpClient.get<User[]>(API_URL).pipe(map(values => {
            const users: User[] = [];console.log("ta retornando")
            for (const value of values) {
                console.log("entra for")
                console.log(value)
                users.push(Object.assign(new User(), value))
            }
            return users;
        }))
   
    }

}
