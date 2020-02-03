import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private http:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    
    return this.http.post<any>(`http://localhost:3000/users/signin`, { email, password })
    .pipe(map(data => {
      // login successful if there's a jwt token in the response
      if (data && data.user && data.user.token) {
        console.log(data.user);
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(data.user));
        this.currentUserSubject.next(data.user);
      }
      else {
          throw new Error(data.msg);
        //throw new Error('Insert correct email and password')
      }

      return data;
    }));
}
logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
  localStorage.clear();
  this.currentUserSubject.next(null);
}
}
