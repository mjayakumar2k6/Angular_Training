import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: [ './first.component.scss' ]
})
export class FirstComponent implements OnInit {

  title = "Our First Component!!!"
  desc = "Our first component styles";
  constructor() { }

  ngOnInit(): void {
  }

}
