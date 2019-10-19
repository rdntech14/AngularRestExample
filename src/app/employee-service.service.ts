import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './models/Employee';

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

  postTodos(employee: Employee[]): Observable<Employee[]> {
    return this.http.post<Employee[]>(`${this.hostUrl}hello4`, employee, httpOptions)
  }
}