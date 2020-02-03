import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  loading = false;
  error;
  message;
  isRegisterd = false;

  
  constructor(private formBuilder:FormBuilder,private router:Router,
    private authenticationService:AuthenticationService,public userService: UserService) {
      if (this.authenticationService.currentUserValue) {
        // redirect to home if already logged in
        this.router.navigate(['']);
     }
     
    }

  public get f() {
    return this.registerForm.controls;
  }

  debouncer: any;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      "firstName": ['', Validators.required],
      "lastName": ['', Validators.required],
      "email": ['', Validators.compose([Validators.required, Validators.email])], //, this.uniqueEmailValidator.bind(this)
      "password": ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(){
    this.submitted = true;
    this.error = null;
    this.message = null;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.userService.register(this.registerForm.value)
    .pipe(first())
    .subscribe(
      data => {
        if (data['success'] === 1) {
          this.message = data['msg']
          setTimeout(() => {
            this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(
              data => {
                if (data != null) {
                    this.router.navigate(['']);
                }
              });
          }, 4000);
          this.isRegisterd = true;
        }
        else {
          this.error = data['msg'];
          this.loading = false;
        }
      },
      error => {
        this.loading = false;
      })
  }









  // uniqueEmailValidator(control: FormControl): Promise<any> | Observable<any> {
  //   const promise = new Promise<any>(
  //     (resolve, reject) => {
  //       this.userService.findbyemail(control.value).pipe(first()).subscribe(
  //         data => {
  //           if (data['success'] === 1) {
  //             resolve(null);
  //           }
  //           else {
  //             //this.error = data['msg'];
  //             resolve({ 'usernameInUse': true });
  //           }
  //         }
  //       )
  //     }
  //   );
  //   return promise;
  // }

}
