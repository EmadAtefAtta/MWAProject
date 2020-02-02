import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { first } from 'rxjs/operators';
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
  constructor(private formBuilder:FormBuilder,private router: Router, private route: ActivatedRoute,private authenticationService: AuthenticationService) {
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
    this.submitted = true;
    this.error = null;
    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.loading = false;
          if (data != null) {
            if (this.returnUrl != null)
              this.router.navigate([this.returnUrl]);
            else
              this.router.navigate(['home']);
          }
        },
        error => {
          console.log("error " + JSON.stringify(error.message))
          this.error = error.message;
          this.loading = false;
        });
 

  }

}
