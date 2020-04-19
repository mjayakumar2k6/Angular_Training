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
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.displayTitle = false;
      this.isAdmin = false;
    }, 3000);
  }

  toggleUser() {
    this.isAdmin = !this.isAdmin;
  }

  assignColor(color) {
    this.color = color;
  }

}
