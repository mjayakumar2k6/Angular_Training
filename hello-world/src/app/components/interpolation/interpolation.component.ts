import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {
  title = "Interpolation";
  training = "Angular/Ionic training";
  url = document.location.href;

  doc = document;
  constructor() { }

  ngOnInit(): void {
  }

  greet(name="Jk") {
    return `Welcome ${name}`;
  }

}
