import { Injectable } from "@angular/core";
import { users } from "../data/users";
import { User } from "src/models/users/user";

@Injectable()
 export class UserRepository {
constructor(){

}
    getUsers(): User[]{
    return users;
    }

}