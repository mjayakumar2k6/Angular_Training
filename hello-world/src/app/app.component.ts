import { Component, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome to Angular Training';
  name = "hey JK!!!";
  description = "Angular is awesome."
  fromChild = {name: ""};

  @ViewChild(ChildComponent) childComponent: ChildComponent;


  displayDataFromChild(event){
    console.log(event);
    this.fromChild=event;
  }


  callChildFn() {
    this.childComponent.displayColor("green");
  }
}
