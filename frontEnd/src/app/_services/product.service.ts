import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProductsURL: string = 'http://localhost:3000/product/AllProducts';
  getOneProductURL: string = 'http://localhost:3000/product/AllProducts/';
  addProductURL: string = 'http://localhost:3000/admin/addProduct';
  removeProductURL: string = 'http://localhost:3000/admin//removeProduct/';
  updateProductURL: string = 'http://localhost:3000/admin//updateProduct';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<any>(this.getProductsURL)
  }
  getOneProduct(id: string) {
    return this.http.get<any>(this.getOneProductURL + id)
  }
  ///////////for admin 
  addProduct(product: product) {
    return this.http.post(this.addProductURL, product)
  }
  removeProduct(id: string) {
    return this.http.delete(this.removeProductURL + id)
  }
  updateProduct(product: product) {
    return this.http.put(this.updateProductURL, product)
  }
}
