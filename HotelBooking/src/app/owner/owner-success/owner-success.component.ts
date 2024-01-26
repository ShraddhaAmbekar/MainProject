import { Component } from '@angular/core';
import { ApiCallService } from 'src/app/shared/api-call.service';

@Component({
  selector: 'app-owner-success',
  templateUrl: './owner-success.component.html',
  styleUrls: ['./owner-success.component.scss']
})
export class OwnerSuccessComponent {

  endpoint='hotelDetails';
  hotelData:any;
  constructor(private apiCallService:ApiCallService){}

  ngOnInit(){
    this.getHotelData();
  }

  getHotelData(){
    this.apiCallService.getApiCall(this.endpoint).subscribe(respo=>{
      this.hotelData=respo;
      console.log(this.hotelData);
      
    })
  }
  getYourHotelData(){
    
  }
}
