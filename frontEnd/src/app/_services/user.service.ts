import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  register(user: User) {
    console.log('registeration'+ JSON.stringify(user)  );
    return this.http.post(`http://localhost:3000/users/signup`, user);
  }
}
