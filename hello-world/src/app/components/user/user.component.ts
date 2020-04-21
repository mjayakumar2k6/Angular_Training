import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  addUser() {
    this.userService.addUser({name: "test", id: 2, email: "test@te.co"})
  }

}

class Engine {
  constructor(params) {}
}

class Tires {
  constructor(tparams) {}
}

class Car {
  engine;
  tires;
  constructor(engine, tires) {
    this.engine = engine;
    this.tires = tires;
  }
}

let eClass = new Engine("12");
let tires = new Tires(4);
let newCar = new Car(eClass,tires)