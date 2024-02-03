import { Component } from '@angular/core';
import { ApiCallService } from 'src/app/shared/api-call.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-journey-start',
  templateUrl: './journey-start.component.html',
  styleUrls: ['./journey-start.component.scss']
})
export class JourneyStartComponent {
  constructor(public dataService:DataService,private apiCallService:ApiCallService){}

  
  journey(journey: any) {
    this.apiCallService.journey = journey
  }
}
