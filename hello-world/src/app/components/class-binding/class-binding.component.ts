import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss']
})
export class ClassBindingComponent implements OnInit {
  title = "Class Bindings"
  applySpecial = true;

  hasError = false;
  applyStyle = {};
  constructor() { }

  ngOnInit(): void {
    this.applyStyle = {
      "success": !this.hasError,
      "error": this.hasError,
      "special": this.applySpecial
    }
  }

}
