import { Component, OnInit, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocaldataService } from '../localdata.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-loginhome',
  templateUrl: './loginhome.component.html',
  styleUrls: ['./loginhome.component.scss']
})
export class LoginhomeComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private transfereService:LocaldataService,
    private _ngZone: NgZone,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }
  code;

  ngOnInit() {
    var urlParams = new URLSearchParams(window.location.search)
    this.code=urlParams.get('code')
    if(this.code!=null){
      document.getElementById('loader').style.display = "block"
    console.log(urlParams.get('code'))

    this.http.post("https://api2.moodi.org/gatepass",{
      code:this.code
    })
    .subscribe(
      result =>{
        // console.log(result)
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
        console.log(error['error'])
        this.transfereService.setJdataTemp(error['error']['user_id'])
        this._ngZone.run(() => this.router.navigate(['register'], {relativeTo: this.activatedRoute.parent}));
       },
      () => {
      }
    ); 
  }

}
}
