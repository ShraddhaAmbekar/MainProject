import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/shared/api-call.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.scss']
})
export class HotelBookingComponent {
  hotelRagistrationForm!:FormGroup;
  list:any;
  selectedStatesList: any[] = [];
  dataById:any;
  imgName: any;
 
  constructor(private formBuilder : FormBuilder,private dataService :DataService, private apiCallService:ApiCallService, private router:Router){}
  
   ngOnInit(){
    
    this.dataById = this.apiCallService.dataById;
     this.formLoad();
     this.functionCalling();
     
     console.log('this.dataById', this.dataById);     
    };
  
   formLoad(){
 
    console.log('this.apiCallService.dataById', this.apiCallService.dataById);
    console.log('this.dataById', this.dataById);
    this.hotelRagistrationForm=this.formBuilder.group({
      ownerName:[this.dataById? this.dataById?.ownerName:'',[Validators.required]],
      ownerMobile :[this.dataById? this.dataById?.ownerMobile:null,[Validators.required]],
      hotelName :[this.dataById? this.dataById?.hotelName:'',[Validators.required]],
      hotelMobile :[this.dataById? this.dataById?.hotelMobile:null,[Validators.required]],
      hotelAdderss :[this.dataById? this.dataById?.hotelAdderss:'',[Validators.required]],
      state:[this.dataById? this.dataById?.state:''],
      city:[this.dataById? this.dataById?.city:''],
      hotelMenu :[this.dataById? this.dataById?.hotelMenu:'',[Validators.required]],
      roomAvailable :[this.dataById? this.dataById?.roomAvailable:'',[Validators.required]],
      userPass: [this.dataById? this.dataById?.userPass:'',[Validators.required]],
      imageField:[]
    })
   }

   Submit(){
 
    let endpoint:string='hotelDetails';
    this.apiCallService.postApiCall(endpoint,this.hotelRagistrationForm.value).subscribe(res=>{
      console.log(res);
      this.router.navigateByUrl('/owner/ownerSuccess')
    })
   }
   

   async update(){
    let respo = await this.apiCallService.updateData('hotelDetails',this.dataById?.id,this.hotelRagistrationForm.value).toPromise()
    this.router.navigateByUrl('/owner/ownerSuccess')
   }

   uploadImage(event:any){ debugger;
    
    const file= event.currentTarget.files[0];
    console.log(file.name)
     let imgName:string="assets/images/"+file.name
    this.hotelRagistrationForm.patchValue({imageField:imgName})
    console.log(imgName);
    
}
   

 

  functionCalling() {
    this.hotelRagistrationForm.get('state')?.valueChanges.subscribe((res: any) => {
      console.log(res);
      this.hotelRagistrationForm.get('city')?.setValue(null);

      if (res) {
        this.selectedStatesList = this.list.filter((obj: any) => obj.label === res)[0].city
        this.hotelRagistrationForm.get('city')?.enable()
      }
      else {
        this.hotelRagistrationForm.get('city')?.disable()
      }
    }
    )

    this.list=this.dataService.list
  }













}
