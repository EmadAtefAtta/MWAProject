import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 productCard=new Array(product) 
  constructor(private http: HttpClient) { }
  register(user: User) {
    console.log('registeration'+ JSON.stringify(user)  );
    return this.http.post(`http://localhost:3000/users/signup`, user);
  }
addToCard(pro){
  this.productCard.push(pro)
}

getNoProducts(){
  return this.productCard.length;
}

// let foo_object // Item to remove
// this.foo_objects = this.foo_objects.filter(obj => obj !== foo_object);


}
