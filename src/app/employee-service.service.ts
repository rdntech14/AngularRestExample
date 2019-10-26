import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './models/Employee';
import { EmployeeWithSkills } from './models/EmployeeWithSkills';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  hostUrl: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.hostUrl}hello2`)
  }

  getTodos1(): Observable<Employee> {
    return this.http.get<Employee>(`${this.hostUrl}hello1`, httpOptions)
  }

  postTodos(employee: Employee[]): Observable<Employee[]> {
    return this.http.post<Employee[]>(`${this.hostUrl}hello4`, employee, httpOptions)
  }

  getTodos2(): Observable<EmployeeWithSkills> {
    return this.http.get<EmployeeWithSkills>(`${this.hostUrl}hello8?name=Tom`, httpOptions)
  }


}