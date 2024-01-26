import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/shared/api-call.service';

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.scss']
})
export class HotelBookingComponent {
  hotelRagistrationForm!:FormGroup;

  constructor(private formBuilder : FormBuilder, private apiCallService:ApiCallService, private router:Router){}
  
   ngOnInit(){
     this.formLoad();
     this.functionCalling()
    };

   formLoad(){
    this.hotelRagistrationForm=this.formBuilder.group({
      ownerName:['',[Validators.required],[Validators.minLength(3)]],
      ownerMobile :['',[Validators.required]],
      hotelName :['',[Validators.required]],
      hotelMobile :['',[Validators.required]],
      hotelAdderss :['',[Validators.required]],
      state:[''],
      city:[''],
      hotelMenu :['',[Validators.required]],
      roomAvailable :['',[Validators.required]],
      userPass: ['',[Validators.required]]
    })
   }

   Submit(formData:any){
    let endpoint:string='hotelDetails';
    this.apiCallService.postApiCall(endpoint,formData).subscribe(res=>{
      console.log(res);
      this.router.navigateByUrl('/owner/ownerSuccess')
    })
   }



   list = [
    {
      id: 1,
      label: 'Maharashtra',
      city: [
        {
          id: 101,
          label: 'Kolhapur'
        },
        {
          id: 102,
          label: 'pune'
        },
        {
          id: 103,
          label: 'Mumbai'
        },
      ]
    },
    {
      id: 2,
      label: 'Karrnatak',
      city: [
        {
          id: 201,
          label: 'Belgaon'
        },
        {
          id: 202,
          label: 'Bengluru'
        },
      ]
    }
  ]


  selectedStatesList: any[] = []
  // submit(){
  //   console.log(this.dropdownForm.value)
  // }



  functionCalling() {
    this.hotelRagistrationForm.get('state')?.valueChanges.subscribe((res: number) => {
      console.log(res);
      this.hotelRagistrationForm.get('city')?.setValue(null);

      if (res) {
        this.selectedStatesList = this.list.filter((obj: any) => obj.id === res)[0].city
        this.hotelRagistrationForm.get('city')?.enable()
      }
      else {
        this.hotelRagistrationForm.get('city')?.disable()
      }
    }
    )
  }













}
