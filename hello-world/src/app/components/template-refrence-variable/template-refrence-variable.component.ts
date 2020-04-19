import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-refrence-variable',
  templateUrl: './template-refrence-variable.component.html',
  styleUrls: ['./template-refrence-variable.component.scss']
})
export class TemplateRefrenceVariableComponent implements OnInit {
  title = "Template reference variable";
  constructor() { }

  ngOnInit(): void {
  }

  logValue(val, element) {
    console.log(val, element);
    //element.style.display = "none";
  }

}
