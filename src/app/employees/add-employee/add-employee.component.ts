import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Employee } from 'src/app/models/Employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      about: ['', Validators.required],
      joiningDate: ['', Validators.required],
    });
  }

  onSubmit() {
    //console.log(this.employeeForm.value);
    const employee = new Employee(
      this.employeeForm.value.name,
      this.employeeForm.value.position,
      this.employeeForm.value.about,
      new Date(this.employeeForm.value.joiningDate)
    );
    this.dataService.addEmployee(employee);
    //redirect to list-employee page
    this.router.navigate(['/list-employees', 'table']);
  }
}
