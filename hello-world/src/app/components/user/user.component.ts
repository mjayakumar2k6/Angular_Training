import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users = []

  employees = []

  name = "";
  salary = "";
  age = "";
  errorMessage = "";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(data => {
      this.users = data;
    });

    this.displayUser();
  }

  addUser() {
    this.userService.addUser({name: "test", id: 2, email: "test@te.co"})
  }

  saveEmp() {
    this.userService.addEmployees({name: this.name, salary: this.salary, age: this.age})
    .subscribe(
      (d:any) => { this.displayUser(); },
      (error:any)=>{
        this.errorMessage = error.message;
        alert("Server error please contact administrator");
      }
    )
  }

  displayUser() {
    this.userService.getDummyEmp()
    .subscribe((d:any)=>{
      this.employees = d.data;
    })    
  }

}
