import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {
  title = "Property Binding";
  name = "myID";
  type = "password";
  isDisabled = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log("enabled")
      this.isDisabled = false;
    }, 5000);
  }

}
