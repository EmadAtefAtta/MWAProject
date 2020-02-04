import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services/authentication.service';
import { User } from './model/user';
import { UserService } from './_services/user.service';
import { AppStore } from './app.store';
import { Store } from 'redux';
import { AppState } from './app.state';
import * as CounterActions from './counter.actions';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  currentUser: User;
  productNo
  counter: number;
  constructor(@Inject(AppStore) private store: Store<AppState>,private router: Router, private authenticationService: AuthenticationService,private userService:UserService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    store.subscribe(() => this.readState());
    this.readState();
  }
 
  readState() {
    const state: AppState = this.store.getState() as AppState;
    this.counter = state.counter;
  }

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }
  logout() {
    this.authenticationService.logout();
    console.log('LogOut now')
    this.router.navigate(['/login']);

  }

  getProductCard(){
   return this.productNo=this.userService.getNoProducts();
  }
}

