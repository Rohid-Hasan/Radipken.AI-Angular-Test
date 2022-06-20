import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login/login.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { EditEmployeesComponent } from './employees/edit-employees/edit-employees.component';
import { EmployeesComponent } from './employees/employees.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'employees',
    component: EmployeesComponent,
    children: [
      { path: 'list-employees/:viewType', component: ListEmployeesComponent },
      { path: 'add-employee', component: AddEmployeeComponent },
      {path:'edit/:id',component:EditEmployeesComponent, canActivate:[AuthGuardService] },
    ],
  },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: 'list-employees/card' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
