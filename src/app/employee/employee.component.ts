import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';
import { EmployeeServiceService } from '../employee-service.service';
import { EmployeeWithSkills } from '../models/EmployeeWithSkills';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  employeesGetResponse: Employee[];

  employeesPostRequest: Employee[];
  employeesPostResponse: Employee[];
  response1 : Employee;
  response2 : EmployeeWithSkills;

  constructor(private employeeServiceService: EmployeeServiceService) { }

  ngOnInit() {

    this.employeesPostRequest = [
      {
        name: "aaa",
        salary: 100.0
      },
      {
        name: "bbb",
        salary: 120
      }
    ];

    //calling GET
    this.employeeServiceService.getTodos().subscribe(response => {
      this.employeesGetResponse = response;
    });
    console.log(this.employeesGetResponse)
    //calling POST - return - json array
    this.employeeServiceService.postTodos(this.employeesPostRequest).subscribe(response => {
      this.employeesPostResponse = response;
    });

    //calling POST - return - json object
    this.employeeServiceService.getTodos1().subscribe(response => {
      this.response1 = response;
    });

    //calling Get - return - json complex object
    this.employeeServiceService.getTodos2().subscribe(response => {
      this.response2 = response;
    });
    console.log(this.response2);

  }

}
