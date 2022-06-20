import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/models/Employee.model';
import { SharedDataService } from 'src/app/shared/shared-data.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css'],
})
export class TableViewComponent implements OnInit,AfterViewInit {
  @Input() employees: Employee[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource: MatTableDataSource<Employee>;
  displayedColumns: string[] = ['name', 'position', 'about', 'joiningDate'];

  constructor(private sharedDataService:SharedDataService) {}

  ngOnInit(): void {
    this.sharedDataService.searchInEmployee.subscribe((value:string)=>{
      this.dataSource.filter = value;
    });
    this.dataSource = new MatTableDataSource(this.employees);
  }

  ngAfterViewInit(){
    //console.log(this.paginator);
    this.dataSource.paginator = this.paginator;
  }
}
