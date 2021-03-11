import { Component } from '@angular/core';
import { UrlSerializer } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'registeryapp';

  firstname:string ;
  name:string
  id:string
  email:string
  contacnumber:string

  list = []


submit(){

  let ob = {
    firstname:this.firstname,
    surname:this.name,
    id:this.id,
    email:this.email,
    contacnumber:this.contacnumber,
  }


  this.list.push(ob);


  

}



myFunction(i){
  this.list.splice(i, 1)

}



}
