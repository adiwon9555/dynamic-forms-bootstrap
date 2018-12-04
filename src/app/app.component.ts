import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamicForms';
  public fields=
  [
    {
      type:'email',
      label:'Email',
      name:'email1',
      size:'300px'
    },
    {
      type:'text',
      label:'Name',
      name:'name1',
      size:'300px',
      class:'mycl'
    },
    {
      type:'number',
      label:'Phone',
      name:'phone1',
      size:'300px'
    },
    {
      type:'date',
      label:'DOB',
      name:'dob1',
      size:'300px'
    },
    {
      type:'select',
      label:'Country',
      name:'sel1',
      size:'300px',
      options:['India','USA','UK','Canada']
    },
    {
      type:'radio',
      label:'Male',
      name:'gender'
      
    },
    {
      type:'radio',
      label:'Female',
      name:'gender'
      
    },
    {
      type:'textarea',
      label:'Message',
      name:'t',
      value:'none',
      rows:5,
      size:'300px'
    },
    {
      type:'checkbox',
      label:'I agree',
      name:'chk1'
      
    },
    {
      type:'submit',
      label:'Go!',
      name:'g',
      value:'none',
      size:'300px'
    }
  ]
}
