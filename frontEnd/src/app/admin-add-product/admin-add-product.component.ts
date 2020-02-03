import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {
  addform: FormGroup;
  error: string;
  message: string;
  submitted = false;
  loading = false;

  constructor(private formbuilder: FormBuilder, private route: Router, private productservice: ProductService) { }

  ngOnInit() {
    this.addform = this.formbuilder.group({
      productName: ['', Validators.required],
      productType: ['', Validators.required],
      productPrice: ['', Validators.required],
      productDetail: ['describe product ...', Validators.required],
      Pictures: this.formbuilder.array([this.initPicRow()])
    })
  }

  initPicRow() {
    return this.formbuilder.group({
      productPicture: ['', Validators.required]
    })
  }
  get formArr() {
    return this.addform.get('Pictures') as FormArray;
  }
  onAddImage() {
    this.formArr.push(this.initPicRow());
  }

  onDeleteImage(index: number) {
    this.formArr.removeAt(index);
  }

  onSubmit() {
  this.submitted = true;
    if (this.addform.invalid) {
      return;
    }
    this.loading = true;
    if (this.addform.valid) {
      this.productservice.addProduct(this.addform.value)
        .subscribe(data => {
          if (data['success'] === 1) {
            this.message = data['msg'];
            this.addform.reset();
            this.addform.markAsPristine();
            this.addform.markAsUntouched;
          }
          else {
            this.error = data['msg'];
          }
          this.loading = false;

        });
    }
  }

  public get f(): any { return this.addform.controls; }
}
