import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import {MatCardModule} from '@angular/material/card'
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProductDetailsComponent, ProductsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild([
      {path:'',component:ProductsComponent},
      {path:':id',component:ProductDetailsComponent}
    ])
  ]
})
export class ProductModule { }
