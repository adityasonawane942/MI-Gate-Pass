import { Component, OnInit, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocaldataService } from '../localdata.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private transfereService:LocaldataService,
    private _ngZone: NgZone,
    private router: Router,
  ) { }

  dept;
  mobileno;

  ngOnInit() {
   
  }

  submit(){
    document.getElementById('loader').style.display = "block"
    console.log(this.mobileno)
    console.log(this.dept)
     this.http.put("https://api2.moodi.org/gatepass",{
      user_id: this.transfereService.getJdataTemp(),
      mobile: this.mobileno,
      department: this.dept,
    })
    
    .subscribe(
      result =>{
        document.getElementById('loader').style.display = "none"
        this._ngZone.run(() => this.router.navigate(['dashboard'] ));
          // console.log(data),
          this.transfereService.setJdata(
            JSON.stringify({
            'user_id':result['user_id'],
            'name':result['name'],
            'ldap':result['ldap'],
            'mobile':result['mobile'],
            'department':result['department'],
            'pic_url':result['pic_url']
  
          }))
      },
      error => {
        document.getElementById('loader').style.display = "none"
       },
      () => {
      }
    ); 
  }

}
