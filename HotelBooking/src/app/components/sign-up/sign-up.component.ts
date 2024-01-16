import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm! : FormGroup; 

  constructor(private fb : FormBuilder){}

  ngOnInit(){
  this.formload()
  }
  formload(){
    this.signUpForm = this.fb.group({
      name : ['',[Validators.required],],
      pan : ['',[Validators.required]],
      email:['',[Validators.required]],
      mob:['',[Validators.required]],
      gender:['',[Validators.required]],
      password:['',[Validators.required]],
      confirmPass:['',[Validators.required]],
      Tnc:[false],
  })
  }
  submit(){
    console.log(this.signUpForm.value)
    
  };
  
}
