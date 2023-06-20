import { Injectable } from "@angular/core";
import { users } from "../";
import { User } from "src/models/user";

@Injectable()
 export class UserRepository {

    getUsers(): User []{
return users;
    }

}