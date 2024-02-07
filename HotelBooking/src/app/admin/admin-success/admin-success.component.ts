import { Component } from '@angular/core';
import { ApiCallService } from 'src/app/shared/api-call.service';

@Component({
  selector: 'app-admin-success',
  templateUrl: './admin-success.component.html',
  styleUrls: ['./admin-success.component.scss']
})
export class AdminSuccessComponent {

  endpoint = 'hotelDetails';
  hotelData: any;
  bookingData:any;
  showHotelData: boolean = false;
  showBookingData:boolean=false;
  showMsg: any;
  searchText: any = "";
  headers: any = ['Owner Name', 'Owner Mobile', 'Hotel Name', 'Hotel Contact No', 'Hotel Address', 'State', 'City', 'Hotel Menu', 'Rooms Available', 'Delete']
  bookheaders:any=['User Name','Adhar No','Email','Mobile No','check-In date','check-Out Date','No of adults','No of childs']

  constructor(private apiCallService: ApiCallService) { }
  ngOnInit() {
    this.getHotelData();
    this.getBookingData()
  }
  viewOwners() {
    this.showHotelData = !this.showHotelData;
    this.showBookingData=false
  }

  getHotelData() {
    this.apiCallService.getApiCall(this.endpoint).subscribe(respo => {
      this.hotelData = respo;
      console.log('this.hotelData',this.hotelData);
    })
  }
  getBookingData(){
    let endpoint="hotelBooking"
    this.apiCallService.getApiCall(endpoint).subscribe(res=>{
     this.bookingData=res 
     console.log('bookingdata',this.bookingData);
     
    })
  }
  viewBookings(){
    this.showBookingData=!this.showBookingData;
    this.showHotelData=false
  }

  async delete(id: any) {
    let res = await this.apiCallService.deleteApiCall('hotelDetails', id).toPromise();
    this.getHotelData();
  }
}
