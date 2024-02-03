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
  showHotelData: boolean = false;
  showMsg: any;
  searchText: any = "";
  headers: any = ['Owner Name', 'Owner Mobile', 'Hotel Name', 'Hotel Contact No', 'Hotel Address', 'State', 'City', 'Hotel Menu', 'Rooms Available', 'Delete']


  constructor(private apiCallService: ApiCallService) { }
  ngOnInit() {
    this.getHotelData()
  }
  viewOwners() {
    this.showHotelData = !this.showHotelData
  }

  getHotelData() {
    this.apiCallService.getApiCall(this.endpoint).subscribe(respo => {
      this.hotelData = respo;
      console.log(this.hotelData);
    })
  }

  async delete(id: any) {
    let res = await this.apiCallService.deleteApiCall('hotelDetails', id).toPromise();
    this.getHotelData();
  }
}
