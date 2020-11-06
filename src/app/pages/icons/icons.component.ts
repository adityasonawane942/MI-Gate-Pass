import { Component, OnInit } from "@angular/core";
import { LocaldataService } from '../login/localdata.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: "app-icons",
  templateUrl: "icons.component.html"
})
export class IconsComponent implements OnInit {
  
  constructor(
    private http: HttpClient,
    private transfereService:LocaldataService,
  ) {}
  user_id=JSON.parse(this.transfereService.getJdata()).user_id
  name=JSON.parse(this.transfereService.getJdata()).name;
  department=JSON.parse(this.transfereService.getJdata()).department;
  mobile=JSON.parse(this.transfereService.getJdata()).mobile;
  pic=JSON.parse(this.transfereService.getJdata()).pic_url;
  ldap=JSON.parse(this.transfereService.getJdata()).ldap;

  profiledata
  ngOnInit() {
    this.http.request('post',"https://api2.moodi.org/userdetail",{
      body:{user_id: this.user_id}}).subscribe(

      result =>{
        // this.name=result['name']
        // this.department=result['name']
        // this.mobile=result['mobile']
        // this.pic="https://gymkhana.iitb.ac.in" + result['pic_url']
        // this.ldap=result['ldap']

        // console.log(this.pic)
      },
      error => {},
      () => {}
    );
    // console.log(this.ldap)
  }
}
