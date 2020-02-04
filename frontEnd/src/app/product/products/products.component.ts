import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { Router } from '@angular/router';
import { product } from 'src/app/model/product';
import { AppStore } from 'src/app/app.store';
import { Store } from 'redux';
import { AppState } from 'src/app/app.state';
import * as CounterActions from '../../counter.actions';
 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  products = []
  counter: number;
  constructor(@Inject(AppStore) private store: Store<AppState>,private productService: ProductService, private route: Router) { 
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

  ngOnInit() {
    this.productService.getAllProducts().subscribe(res =>  this.products=res ,
      error => console.log(error)
    )
    console.log(this.products[0])
  }

  goToProduct(product_: product) {
    console.log('befor redirect'+ product_._id)
    this.route.navigate(['product',product_._id ]);
  }

}
