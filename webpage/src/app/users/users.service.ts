import { User } from "./user.model";

export class UsersService{
    users: User[] = [];

    getUsers(){
        return this.users.slice()
    }

    addUser(user: User){
        this.users.push(user)
    }
}