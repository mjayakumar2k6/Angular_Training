import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [] 
  private _url = './assets/data/users.json';
  private _apiUrl = "http://dummy.restapiexample.com/api/v1/employees";
  
  constructor(private http: HttpClient) { }

  getUsers():Observable<any> {
    return this.http.get(this._url);
  }

  addUser(user) {
    this.users.push(user);
  }

  getDummyEmp() {
    return this.http.get(this._apiUrl);
  }

  addEmployees(emp) {
    return this.http.post("http://dummy.restapiexample.com/api/v1/create", emp)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: HttpErrorResponse) {
    //return Observable.throw("");
    console.log(error);
    return throwError(error || "Server Error");
  }

  
}
