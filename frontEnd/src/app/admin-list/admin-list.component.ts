import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Router } from '@angular/router';
import { product } from '../model/product';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  products: MatTableDataSource<product>;
  displayedColumns: string[] = ['name', 'productType', 'productPrice', 'actions'];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(res => this.products = res,
      error => console.log(error)
    )

  }
  applyFilter(filterValue: string) {
    this.products.filter = filterValue.trim().toLowerCase();

    if (this.products.paginator) {
      this.products.paginator.firstPage();
    }
  }
  updateProduct(product: product) { }


  confirmDialog(product: product): void {
    console.log(product._id)
    this.productService.removeProduct(product._id)
    
    this.productService.getAllProducts().subscribe(res => this.products = res,
      error => console.log(error)
    )
  
  }
}
