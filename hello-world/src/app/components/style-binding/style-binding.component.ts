import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent implements OnInit {
  title = "Style Binding";
  fontSize = '30px';
  fontStyle='italic';
  styleObj = {'color': 'green', fontSize: '32px', fontStyle: 'italic'};
  constructor() { }

  ngOnInit(): void {
  }

}
