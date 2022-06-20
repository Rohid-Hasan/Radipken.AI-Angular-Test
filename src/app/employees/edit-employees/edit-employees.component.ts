import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Employee } from 'src/app/models/Employee.model';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.css'],
})
export class EditEmployeesComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      const id = +param['id'];
      const employee = this.dataService.getById(id);
      this.employeeForm = this.formBuilder.group({
        name: [employee.name, Validators.required],
        position: [employee.position, Validators.required],
        about: [employee.about, Validators.required],
        joiningDate: [employee.joiningDate, Validators.required],
        id:[employee.id],
      });
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
    employee.id = this.employeeForm.value.id;
    //console.log(employee);
    this.dataService.editEmployee(employee);
    //redirect to list-employee page
    this.router.navigate([ '/employees','list-employees', 'table']);
  }
}
