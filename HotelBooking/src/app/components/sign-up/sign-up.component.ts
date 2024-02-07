import { UpperCasePipe } from '@angular/common';
import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/shared/api-call.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm!: FormGroup;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  isMatch: boolean = false;
  endpoint: any;

  constructor(private fb: FormBuilder, private apiCallService: ApiCallService, private router:Router) { }

  ngOnInit() {
    this.formload();
    this.endpoint = this.apiCallService.journey;
  }
  //form validations

  formload() {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required],],
      pan: ['', [Validators.pattern("^[A-Z]{5}[0-9]{4}[A-Z]$")]],
      email: ['', [Validators.required]],
      mob: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPass: ['', [Validators.required]],
      tc:[true]
    })
  }

  //password icon
  toShowPassword() {
    this.showPassword = !this.showPassword;

  }
  toShowConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;

  }

  //password and confirm password should be equal
  matchPassword() {
    if (this.signUpForm.value.confirmPass != '') {
      if (this.signUpForm.value.password == this.signUpForm.value.confirmPass) {
        this.isMatch = false;
      } else {
        this.isMatch = true;
      }
    }
  }

  //submit data to database using api method
  submit() {
  
    let endpoint = this.apiCallService.journey;
    //console.log(this.signUpForm.value)
    this.apiCallService.postApiCall(endpoint, this.signUpForm.value).subscribe
     
      (respo=>{
 
        if(this.endpoint ==='admin'){
           this.router.navigateByUrl('/admin/adminSuccess')
        }else if(this.endpoint === 'owner'){
          this.router.navigateByUrl('/owner/ownerSuccess')
        }
        else{
          this.router.navigateByUrl('/user/userSuccess')
        }
      })
      
  };
  

}
