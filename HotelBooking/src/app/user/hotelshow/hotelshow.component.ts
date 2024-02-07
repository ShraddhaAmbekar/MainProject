import { Component } from '@angular/core';
import { ApiCallService } from 'src/app/shared/api-call.service';

@Component({
  selector: 'app-hotelshow',
  templateUrl: './hotelshow.component.html',
  styleUrls: ['./hotelshow.component.scss']
})
export class HotelshowComponent {
  hotelData: any;
  endpoint: string = 'hotelDetails';
  searchText = ''
  constructor(private apiCallService: ApiCallService){}

  ngOnInit() {
    this.getHotelData()
  }

  getHotelData() {
    this.apiCallService.getApiCall(this.endpoint).subscribe(respo => {
      this.hotelData = respo;
      console.log(this.hotelData);

    })
  }

  async book(id: any) {

    this.apiCallService.dataById = await this.apiCallService.getApiCall(this.endpoint, id).toPromise();
    console.log('this.apiCallService.dataById', this.apiCallService.dataById);
    //async await 
  }

  reset() {
    this.hotelData = null
  }
}
