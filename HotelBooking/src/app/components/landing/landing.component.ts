import { Component } from '@angular/core';
import { ApiCallService } from 'src/app/shared/api-call.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor(private apiCallService: ApiCallService,public dataService:DataService) { }

  journey(journey: any) {
    this.apiCallService.journey = journey
  }

}
