import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  departments = [
    {name: "Infra", id: 1},
    {name: "HR & Finance", id: 2},
    {name: "Marketting", id: 3},
    {name: "IT", id: 4}
  ]
  selectedDepartmentId;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedDepartmentId = "";
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.selectedDepartmentId = params.get("selectedId");
    });
  }

  navigateToDepartmentDetails(department) {
    //this.router.navigate(["/departments", department.id, department.name]);
    this.router.navigate([department.id, department.name], {relativeTo: this.route });
  }

  isSelected(department) {
    return this.selectedDepartmentId == department.id;
  }

}
