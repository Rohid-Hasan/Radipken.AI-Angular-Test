import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedInUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor() {}

  login(user: User) {
    if (user.username == 'admin' && user.password == 'admin') {
      //login success
      this.loggedInUser.next(new User(user.username, user.password));
      return 'SUCCESS';
    } else {
      //invalid credentials
      return 'INVALID CREDENTIALS';
    }
  }
}
