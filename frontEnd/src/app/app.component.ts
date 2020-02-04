import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services/authentication.service';
import { User } from './model/user';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  currentUser: User;
  productNo
  constructor(private router: Router, private authenticationService: AuthenticationService,private userService:UserService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
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

