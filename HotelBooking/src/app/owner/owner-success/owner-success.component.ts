import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/shared/api-call.service';

@Component({
  selector: 'app-owner-success',
  templateUrl: './owner-success.component.html',
  styleUrls: ['./owner-success.component.scss']
})
export class OwnerSuccessComponent {

  endpoint='hotelDetails';
  hotelData:any;
  hotelByOwner:any;
  showHotelData!:boolean;
  headers=['Hotel Name','Hotel Contact No', 'Hotel Address', 'State','City','Hotel Menu','Rooms Available','Edit','Delete']
  showMsg: boolean=false;
  ownerName: any;
  

  constructor(private apiCallService:ApiCallService,private router :Router){}

  ngOnInit(){
    this.getHotelData();

  }

  getHotelData(){
    this.apiCallService.getApiCall(this.endpoint).subscribe(respo=>{
      this.hotelData=respo;
      console.log(this.hotelData);     
    })
  }
  viewHotels(){
    this.hotelByOwner=[];
    if(this.hotelData){  
      this.hotelData.forEach((item:any)=>{
        if(item.ownerName == this.apiCallService.userName){
          this.hotelByOwner.push(item)
         this.ownerName=item.ownerName
        }      
      })
      if(this.hotelByOwner.length > 0){
        this.showHotelData=true;
        console.log(this.hotelByOwner)
      }else{
        this.showMsg=true;
        this.showHotelData=false;
        console.log('No Data found')
      }
      
      }
    }

    reset(){
      this.apiCallService.dataById = null;
    }

   async edit(id:any){

      this.apiCallService.dataById = await this.apiCallService.getApiCall(this.endpoint, id).toPromise().then()
console.log('this.apiCallService.dataById',this.apiCallService.dataById);

        this.router.navigateByUrl('/owner/hotelBooking') //async await 
      }
    
    async delete(id:any){
      let respo = await this.apiCallService.deleteData('hotelDetails',this.apiCallService.dataById.id).toPromise()
    }    
}

