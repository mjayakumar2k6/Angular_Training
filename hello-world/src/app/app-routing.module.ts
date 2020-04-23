import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsComponent } from './components/departments/departments.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';


const routes: Routes = [
  {
    path: "departments", component: DepartmentsComponent
  },
  {
    path: "employeelist", component: EmployeeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  DepartmentsComponent,
  EmployeeListComponent
];
