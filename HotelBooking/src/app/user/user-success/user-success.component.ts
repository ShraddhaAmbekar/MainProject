import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-success',
  templateUrl: './user-success.component.html',
  styleUrls: ['./user-success.component.scss']
})
export class UserSuccessComponent {
hotelData: any;
searchText:any="";

  constructor(private router:Router){}

hotelShow(){
  this.router.navigateByUrl('/user/hotelShow')
}


}
