import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [
    {
      id: "123",
      name: "Alex",
      email: "Alex@gmail.com",
      department: "sales",
      phone: "1231243",
      salary: 1000
    },
    {
      id: "345",
      name: "Elon",
      email: "elon@gmail.com",
      department: "administration",
      phone: "30123123",
      salary: 1000000
    },
    {
      id: "789",
      name: "carlos",
      email: "Carlos@gmail.com",
      department: "engineering",
      phone: "13213423",
      salary: 10000
    },
  ];

  constructor() { }

  ngOnInit(): void {

    this.employees.push()

  }

}
