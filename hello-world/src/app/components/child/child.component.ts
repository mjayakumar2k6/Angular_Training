import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  title = "Child Component"
  @Input("parentData") public name;
  color = "";
  //@Input() public parentData;
  
  @Output()  childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  displayInparent() {
    this.childEvent.emit({name: "jk", id: 1});
  }

  displayColor() {
    this.color = "red";
  }

}


class Engine {
  constructor(params) {

  }
}

class Tires {
  constructor() {

  }
}
/*
class Car {
  engine;
  tires;
  constructor() {
    this.engine = new Engine();
    this.tires = new Tires();
  }
}
*/

class Car {
  engine;
  tires;
  constructor(engine, tires) {
    this.engine = engine;
    this.tires = tires;
  }
}
/*
let engine = new Engine(12);
let tires = new Tires();
let car = new Car(engine, tires);
*/