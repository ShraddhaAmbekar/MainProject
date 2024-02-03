import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/shared/api-call.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  show:boolean=false;
  showPassword :boolean=false;
  endpoint:any;
  data:any;
  notValid:boolean=false;
  journey:any;

  constructor(private apiCallService : ApiCallService, private router:Router){}

  ngOnInit(){
    this.endpoint=this.apiCallService.journey;
    this.getData();
  }

  toShowPassword(){
    this.showPassword = !this.showPassword;
    this.show = !this.show ;
  }

  submit(loginform:any){
    console.log(loginform);
    this.data.find((ele:any)=>{
      if(loginform.userName == ele.name && loginform.password ==ele.password){
        this.apiCallService.userName =loginform.userName

        if(this.endpoint ==='admin'){
          this.router.navigateByUrl('/admin/adminSuccess')
        }else if(this.endpoint === 'owner'){
          this.router.navigateByUrl('/owner/ownerSuccess')
        }
        else{
          this.router.navigateByUrl('/user/userSuccess')
        }
       
      }else{
        this.notValid=true
      }
    })
    
  }
  
  getData(){
    this.apiCallService.getApiCall(this.endpoint).subscribe(resp=>{
      this.data=resp
      console.log('this.data ',this.data);
    })
  }  

}
