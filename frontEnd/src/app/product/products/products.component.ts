import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { Router } from '@angular/router';
import { product } from 'src/app/model/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  names = ['emad', 'hedra', 'sam']
  products = []
  constructor(private productService: ProductService, private route: Router) { }

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
