import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-ifng-switch',
  templateUrl: './ng-ifng-switch.component.html',
  styleUrls: ['./ng-ifng-switch.component.scss']
})
export class NgIfngSwitchComponent implements OnInit {
  title = "*ngIf - *ngSwitch";
  displayTitle = true;
  isAdmin = true;

  color = "";
  colors = ["red", "orange", "green", "pink"];
  

  users = [
    {name: "Jk", id: 1, email: "jk@jk.com"},
    {name: "Vidyashree", id: 2, email: "abc@jk.com"},
    {name: "Rincy", id: 3, email: "xyz@jk.com"},
    {name: "Tejaswini", id: 4, email: "wery@jk.com"}
  ]

  displayUser = [];
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.displayTitle = false;
      this.isAdmin = false;
    }, 3000);
    this.displayUser.push(this.users[0])
  }

  toggleUser() {
    this.isAdmin = !this.isAdmin;
  }

  assignColor(color) {
    this.color = color;
  }

  pageUser() {
    let index = this.displayUser.length;
    if(this.users[index]) {
      this.displayUser.push(this.users[index])
    } else {
      alert("Thats all for now!!!");
    }
  }

}
