import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.scss']
})
export class TwowayBindingComponent implements OnInit {
  title = "Two way data binding"
  name = "Welcome";
  username="";
  password="";
  user = {name: "jk", email: "jk@jk.com"}
  constructor() { }

  ngOnInit(): void {
  }

  doLogin() {
    console.log(this.username, this.password);
  }

  doUpdate() {
    console.log(this.user)
  }

  updateMydata(val) {
    this.user.name = val;
  }

}
