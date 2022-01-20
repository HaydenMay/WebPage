export class User{
    username: string
    loggedIn: boolean
    description: string
    constructor(username: string, isLoggedIn: boolean, description: string){
        this.username = username;
        this.loggedIn = isLoggedIn;
        this.description = description
    }
}