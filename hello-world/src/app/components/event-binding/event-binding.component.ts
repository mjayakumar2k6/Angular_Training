import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
  title = "Event Binding"
  welcome = "";
  event = "";
  enableDisableInput = false;
  hasError = true;
  isSpecital = false;
  constructor() { }

  ngOnInit(): void {
  }

  greet() {
    this.welcome = "Welcome JK!!!";
    console.log("Hey Jk!!!");
  }

  captureEvent(event) {
    console.log("captureEvent", event);
    this.event = event.type;
  }

  enableDisable() {
    this.enableDisableInput = !this.enableDisableInput;
  }

  assignError(iserror: boolean) {
    this.hasError = iserror;
  }

  toggleSpecial() {
    this.isSpecital = !this.isSpecital;
  }

  logClick() {
    console.log("TR clicked");
  }

  logTd(event: Event) {
    event.stopPropagation();
    console.log("TD clicked");
  }

}
