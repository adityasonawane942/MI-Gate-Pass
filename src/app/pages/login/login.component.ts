import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }
  code;
  ngOnInit() {
    // var urlParams = new URLSearchParams(window.location.search)
    // this.code=urlParams.get('code')
    // if(this.code!=null){
    // console.log(urlParams.get('code'))

    // this.http.post("https://api2.moodi.org/gatepass",{
    //   code:this.code
    // })
    // .subscribe(
    //   result =>{ console.log(result)},
    //   error => {console.log(error) },
    //   () => {
    //   }
    // ); 

    // }
  }

}
