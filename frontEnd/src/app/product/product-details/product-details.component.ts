import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/_services/product.service';
import { product } from 'src/app/model/product';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product :product;
  productId
  constructor(private route: ActivatedRoute,private router: Router, private productsService: ProductService,private userService:UserService) { }

  ngOnInit() {
    this.route.params.subscribe(param=>{
      
       this.productsService.getOneProduct(param['id']).subscribe(pro=>{
        this.product= pro 
       
       });
    });
    console.log(this.product)
    
  }

  addToCart(prod:product){
    this.userService.addToCard(prod);
    console.log(this.userService.getNoProducts())
  }

}
