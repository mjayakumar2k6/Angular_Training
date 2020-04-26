import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ClassField } from '@angular/compiler';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss']
})
export class DepartmentDetailsComponent implements OnInit {

  deptId = "";
  deptName = "";

  departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap);
    this.deptId = this.route.snapshot.paramMap.get("id");
    this.deptName = this.route.snapshot.paramMap.get("name");

    

    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.deptId = params.get("id");
      this.departmentId = parseInt(params.get("id"));
    });
  }

  gotNext() {
    if(this.departmentId==4) {
      return false;
    }
    this.departmentId = this.departmentId + 1;
    let url = this.router.url.split("/");
    this.router.navigate([url[1], this.departmentId])
  }

  goPrev() {
    if(this.departmentId==1) {
      return false;
    }
    this.departmentId = this.departmentId - 1;
    let url = this.router.url.split("/");
    this.router.navigate([url[1], this.departmentId])
  }

  gotBack() {
    //this.router.navigate(["/departments", {selectedId: this.departmentId}])
    this.router.navigate(["../../", {selectedId: this.departmentId}], 
    {relativeTo: this.route})
  }

  goToContact() {
    this.router.navigate(["/departments-lists", this.departmentId , "department-contacts"]);
  }

  goToInfo() {
    this.router.navigate(["/departments-lists", this.departmentId , "department-info"]);
  }
}
