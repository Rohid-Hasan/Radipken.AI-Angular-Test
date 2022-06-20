import { AfterViewChecked, AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Employee } from 'src/app/models/Employee.model';
import { SharedDataService } from 'src/app/shared/shared-data.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit,AfterViewInit,OnDestroy {
  @Input() employees: Employee[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  obs:Observable<any>;

  dataSource:MatTableDataSource<Employee>;

  constructor(private sharedDataService:SharedDataService,private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
    this.sharedDataService.searchInEmployee.subscribe((value:string)=>{
      this.dataSource.filter = value;
    });
    this.dataSource = new MatTableDataSource(this.employees);
    this.obs = this.dataSource.connect();
  }

  ngAfterViewInit(): void {
    setTimeout(()=>{
      //console.log(this.paginator);
      //!this.dataSource.paginator ? this.dataSource.paginator = this.paginator : null;
      this.dataSource.paginator = this.paginator;
    },0)
  }

  ngOnDestroy(): void {
      if(this.dataSource){
        this.dataSource.disconnect();
      }
  }

  onDeleteEmployee(id:number){
    console.log(id);
    this.dataService.deleteEmployee(id);
    this.router.navigate(['/employees']);
  }



}
