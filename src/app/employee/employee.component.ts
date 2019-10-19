import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  employeesGetResponse: Employee[];

  employeesPostRequest: Employee[];
  employeesPostResponse: Employee[];

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
    //calling POST
    this.employeeServiceService.postTodos(this.employeesPostRequest).subscribe(response => {
      this.employeesPostResponse = response;
    });


  }

}
