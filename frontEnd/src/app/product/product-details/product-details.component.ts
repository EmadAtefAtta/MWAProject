import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/_services/product.service';
import { product } from 'src/app/model/product';
import { UserService } from 'src/app/_services/user.service';
import { AppState } from 'src/app/app.state';
import * as CounterActions from '../../counter.actions';
import { AppStore } from 'src/app/app.store';
import { Store } from 'redux';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product :product;
  productId
  counter: number;
  constructor(@Inject(AppStore) private store: Store<AppState>,private route: ActivatedRoute,private router: Router, private productsService: ProductService,private userService:UserService) {
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
    this.route.params.subscribe(param=>{
      
       this.productsService.getOneProduct(param['id']).subscribe(pro=>{
        this.product= pro 
       
       });
    });
    console.log(this.product)
    
  }

  addToCart(prod:product){
    this.increment()
    this.userService.addToCard(prod);
    console.log(this.userService.getNoProducts())
  }

}
