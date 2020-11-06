import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { LocaldataService } from '../login/localdata.service';
import * as $ from 'jquery';

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent {
  constructor(
    private http: HttpClient,
    private transfereService:LocaldataService,
  ) {}
user_id=JSON.parse(this.transfereService.getJdata()).user_id;
partyname;
date;
vehicleno = '';
department;
namesofvisitors = '';
details;
submitbtn=true
items = [0];
names = [0];

  add(){
    this.items.push(0);
  }
  delete(){
    this.items.pop();
  }

  
  addname(){
    this.names.push(0);
  }
  deletename(){
    this.names.pop();
  }

  save() { 
    for(var i = 0; i < this.items.length; i++){
      var bla = $('#'+i.toString()).val();
      if(bla != ''){
        this.vehicleno += bla+','
      }
    }
    
    for(var i = 0; i < this.names.length; i++){
      var bla = $('#'+(-i-1).toString()).val();
      if(bla != ''){
        this.namesofvisitors += bla+','
      }
    }
    this.vehicleno = this.vehicleno.substring(0, this.vehicleno.length - 1)
    this.namesofvisitors = this.namesofvisitors.substring(0, this.namesofvisitors.length - 1)
    this.http.post("https://api2.moodi.org/creategatepass",{
      user_id: this.user_id,
      department : this.department,
      date: this.date,
      details_of_equipments: this.details , 
      name_of_visitors : this.namesofvisitors,
      vehicle_no : this.vehicleno, 
      party_name: this.partyname,
  }
  )
    .subscribe(
      result =>{
        console.log(result)
        document.getElementById('loader').style.display = "none"
        this.partyname=undefined
        this.date=undefined
        this.vehicleno=undefined
        this.department=undefined
        this.namesofvisitors=undefined
        this.details=undefined
        this.submitbtn=true
        // document.getElementById('confirmation').style.display = "block"
        alert("New Gate Pass Created!")
      },
      error => {
        this.submitbtn=true
        document.getElementById('loader').style.display = "none"
        console.log(error)
        alert(JSON.stringify(error["error"]))
       },
      () => {
        this.submitbtn=true
      }
    );
  }
}
