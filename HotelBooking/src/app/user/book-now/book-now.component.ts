import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/shared/api-call.service';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss']
})
export class BookNowComponent {
  bookNowForm!:FormGroup;
  bookingData: any;
  dataById:any

  constructor(private fb :FormBuilder, public apiCallService:ApiCallService, private router:Router){}
  ngOnInit() {
    this.formload();
    this.dataById=this.apiCallService.dataById
  }
  
  //form validations

  formload() {
    this.bookNowForm = this.fb.group({
      userName: ['', [Validators.required],],
      adhar: [''],
      email: ['', [Validators.required]],
      mob: [''],
      checkin: [],
      checkout: [],
      adult:[],
      child:[],
      amount:[1000]

      
    })
  }




  submit(){
  let endpoint:string='hotelBooking';
    this.apiCallService.postApiCall(endpoint,this.bookNowForm.value).subscribe(res=>{
      this.bookingData=res
      console.log(this.bookingData);
    
      this.router.navigateByUrl('/user/userSuccess')
    })
   }
}
