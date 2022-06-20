import { Injectable } from '@angular/core';
import { Employee } from './models/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //when our app starts there is no emploee
  employees:Employee[] = [
    {id:1, name:'Rohid 1',position:'angular developer',about:'expert MEAN stack developer',joiningDate:new Date()},
    {id:2,name:'Rohid 2',position:'angular developer',about:'expert MEAN stack developer',joiningDate:new Date()},
    {id:3,name:'Rohid 3',position:'angular developer',about:'expert MEAN stack developer',joiningDate:new Date()},
    {id:4,name:'Rohid 4' ,position:'angular developer',about:'expert MEAN stack developer',joiningDate:new Date()},
    {id:5,name:'Rohid 5' ,position:'angular developer',about:'expert MEAN stack developer',joiningDate:new Date()},
    {id:6,name:'Rohid 6',position:'angular developer',about:'expert MEAN stack developer',joiningDate:new Date()},
    {id:7,name:'Rohid 7',position:'angular developer',about:'expert MEAN stack developer',joiningDate:new Date()},
    {id:8,name:'Rohid 8',position:'angular developer',about:'expert MEAN stack developer',joiningDate:new Date()},
    {id:9,name:'Rohid 9',position:'angular developer',about:'expert MEAN stack developer',joiningDate:new Date()},
    {id:10,name:'Rohid 10',position:'angular developer',about:'expert MEAN stack developer',joiningDate:new Date()},
    {id:11,name:'Rohid 11',position:'angular developer',about:'expert MEAN stack developer',joiningDate:new Date()},
  ];

  constructor() { }

  getEmployees() {
    return this.employees;
  }

  addEmployee(employee:Employee){
    const id = this.employees.length + 1;
    employee.id = id;
    this.employees.push(employee);
  }

  deleteEmployee(id:number){
    //console.log("before",this.employees);
    this.employees.splice(id-1,1);
    //console.log("after",this.employees);
  }

  editEmployee(employee:Employee){
    this.employees[employee.id - 1] = employee;
  }

  getById(id:number){
    return this.employees[id-1];
  }
}
