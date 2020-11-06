import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaldataService {

  constructor() { }

setJdata(data){
  localStorage.setItem('jdata',data);
}
getJdata(){
  // let temp = this.uid;
  return localStorage.getItem('jdata')
}
setJdataTemp(data){
  localStorage.setItem('jdatatemp',data);
}

getJdataTemp(){
  // let temp = this.uid;
  return localStorage.getItem('jdatatemp')
}
}
