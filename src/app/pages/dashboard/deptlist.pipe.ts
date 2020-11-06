import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deptlist'
})
export class DeptlistPipe implements PipeTransform {


  transform(pass, term: any): any {
    // console.log()
    if(term === undefined) return pass;
    if(term === "") return pass;
    if(term === null) return pass;
    var result:any[]=[];
    var do_not_push=true;
    Object.keys(pass).forEach(key => {     
      if(pass[key].department.toLowerCase().search(term.toLowerCase())!=-1 || pass[key].department.toLowerCase().search(term.toLowerCase())!=-1 || pass[key].pass_number.toLowerCase().search(term.toLowerCase())!=-1 )   
      result.push( pass[key]);

    })
    return result;
  }

}
