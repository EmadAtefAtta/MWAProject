import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
names=['emad','hedra','sam']
  products=[]
  constructor(private productService: ProductService,private route:Router) { }

  ngOnInit() {
    // this.productService.getAllProducts().subscribe( res =>{
    //   this.products=res.products

    // },
    //     error => console.log(error)
    // )
  }

  goToProduct(name:String) {
    console.log(name)
   //this.route.navigate(['product', 6]);
  }

}
