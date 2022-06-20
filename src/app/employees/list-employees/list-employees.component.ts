import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Employee } from 'src/app/models/Employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  isTableView: boolean;
  isCardView: boolean;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      if (param['viewType'] == 'table') {
        this.isCardView = false;
        this.isTableView = true;
      } else if (param['viewType'] == 'card') {
        this.isTableView = false;
        this.isCardView = true;
      } else {
        this.isTableView = false;
        this.isCardView = false;
        alert(
          'You have entered an incorrect URL So I am redirecting you to the employees list table view'
        );
        this.router.navigate(['/list-employees', 'table']);
      }
    });
    this.employees = this.dataService.getEmployees();
  }
}
