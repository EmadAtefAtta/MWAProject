import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  loading = false;
  error: string;
  returnUrl: string = null;
  constructor(private formBuilder:FormBuilder,private router: Router, private route: ActivatedRoute) {
    this.loginForm=formBuilder.group({
      "email":['',Validators.compose([Validators.required,Validators.email])],
      "password":['',Validators.required]
    })
   }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  
  public get f() {
    return this.loginForm.controls;
  }
  onSubmit(){

  }

}
