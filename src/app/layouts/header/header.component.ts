import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/User.model';
import { SharedDataService } from 'src/app/shared/shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  user:User | null;
  searchValue:string;

  constructor(
    private sharedDataService: SharedDataService,
    private authService: AuthService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.authService.loggedInUser.subscribe((user) => {
      this.user = user;
    });
  }

  onSearch(event: any) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const isInvalid = specialChars.test(event.target.value);
    if (isInvalid) {
      //redirect to error page
      this.router.navigate(['/error']);
      this.searchValue = '';
    }
    this.sharedDataService.searchInEmployee.next(event.target.value);
  }

  onLogout(){
    this.authService.loggedInUser.next(null);
  }
}
