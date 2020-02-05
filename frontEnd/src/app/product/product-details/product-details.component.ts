import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/_services/product.service';
import { product } from 'src/app/model/product';
import { UserService } from 'src/app/_services/user.service';
import { AppState } from 'src/app/app.state';
import * as CounterActions from '../../counter.actions';
import { AppStore } from 'src/app/app.store';
import { Store } from 'redux';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: product;
  productId
  counter: number;
  currentUser: User;
  constructor(@Inject(AppStore) private store: Store<AppState>, private route: ActivatedRoute, private router: Router, private productsService: ProductService, private userService: UserService, private authenticationService: AuthenticationService) {
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
  ngOnInit() {
    this.route.params.subscribe(param => {

      this.productsService.getOneProduct(param['id']).subscribe(pro => {
        this.product = pro

      });
    });
    console.log(this.product)

  }

  addToCart(prod: product) {
    if (!this.currentUser)
    { 
       this.router.navigate(['/login']);
    }
    else
    this.increment()
    // this.userService.addToCard(prod);
    // console.log(this.userService.getNoProducts())

  }

}
