import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsComponent } from './components/departments/departments.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentDetailsComponent } from './components/department-details/department-details.component';
import { DepartmentContactsComponent } from './components/department-contacts/department-contacts.component';
import { DepartmentInfoComponent } from './components/department-info/department-info.component';


const routes: Routes = [
  {
    path: "dashboard", component: DashboardComponent
  },
  {
    path: "departments-lists", component: DepartmentsComponent
  },
  {
    path: "departments-lists/:id", component: DepartmentDetailsComponent,
    children: [
      { path: "department-contacts", component: DepartmentContactsComponent },
      { path: "department-info", component: DepartmentInfoComponent },
    ]
  },
  {
    path: "departments-lists/:id/:name", component: DepartmentDetailsComponent
  },
  {
    path: "employeelist", component: EmployeeListComponent
  },
  {
    path: "", redirectTo: "/dashboard", pathMatch: "full"
  },  
  {
    path: "**", component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  DepartmentsComponent,
  EmployeeListComponent,
  PageNotFoundComponent,
  DashboardComponent
];
