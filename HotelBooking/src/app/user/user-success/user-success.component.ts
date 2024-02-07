import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/shared/api-call.service';

@Component({
  selector: 'app-user-success',
  templateUrl: './user-success.component.html',
  styleUrls: ['./user-success.component.scss']
})
export class UserSuccessComponent {
hotelData: any;
searchText:any="";
showBookingData=false; 
bookingsByUser:any;
bookingData: any;

headers=['User Name','Adhar No','Email','Mobile No','check-In date','check-Out Date','No of adults','No of childs']

  

  constructor(private router:Router, private apiCallService:ApiCallService){}
  ngOnInit(){
    this.getBookingData();
    
  }

hotelShow(){
  this.router.navigateByUrl('/user/hotelShow')
}


viewBookings(){
  this.showBookingData = !this.showBookingData

  this.bookingsByUser = [];
  if(this.bookingData){
    this.bookingData.forEach((item:any)=>{
      if(item.userName == this.apiCallService.userName){
        this.bookingsByUser.push(item)
      }   
  })}
  console.log(this.bookingsByUser);
  
}

getBookingData(){
  let endpoint="hotelBooking"
  this.apiCallService.getApiCall(endpoint).subscribe(res=>{
   this.bookingData=res 
   console.log('bookingdata',this.bookingData);
   
  })
}
}
