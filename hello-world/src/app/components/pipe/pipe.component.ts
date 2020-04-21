import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  title = "Pipe Component"

  name = "hello Jk";
  num = 5.347;
  date = new Date();

  users = [
    {name: "jk", id: 1, email: "jk@jk.com"},
    {name: "Vidyashree", id: 2, email: "abc@jk.com"},
    {name: "Rincy", id: 3, email: "xyz@jk.com"},
    {name: "Tejaswini", id: 4, email: "wery@jk.com"}
  ]  
  constructor() { }

  ngOnInit(): void {
  }

}
