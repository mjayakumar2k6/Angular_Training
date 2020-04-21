import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    {name: "jk", id: 1, email: "jk@jk.com"},
    {name: "Vidyashree", id: 2, email: "abc@jk.com"},
    {name: "Rincy", id: 3, email: "xyz@jk.com"},
    {name: "Tejaswini", id: 4, email: "wery@jk.com"},
    {name: "xyz", id: 5, email: "wery@jk.com"},
  ] 
  constructor() { }

  getUsers() {
    return this.users;
  }

  addUser(user) {
    this.users.push(user);
  }
}
