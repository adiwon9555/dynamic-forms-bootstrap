import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'd-form-b',
  templateUrl: 'dynamic-form-bootstrap.component.html',
  styles: []
})
export class DynamicFormBootstrapComponent implements OnInit {

  @Input("field") field:any

  
  public forInput=false;
  public forRadio=false;
  public forCheckbox=false;
  public forSelect=false;
  public forSubmit=false;
  public forTextarea=false;

  //public inputClass='';

  public placeholder;
  public id;
  public type:String;
  public label:String;
  public name:String;
  public value:String;
  public class:String;
  public size:String;
  public options:String[];
  public rows:String;
  public ncount=Math.round(10000000*Math.random());
  constructor() { }

  ngOnInit() {
     if(this.field.type=='submit'){
        this.forSubmit=true
        this.class=this.field.class==undefined?'form-group':'form-group '+this.field.class;
        //this.label=this.label==undefined?'':this.label;
        this.id=this.field.name==undefined?'submit'+(this.ncount):this.field.name;
        this.size=this.field.size==undefined?'100%':this.field.size;
        
        this.label=this.field.label==undefined?'':this.field.label;
     }
     else if(this.field.type=='checkbox'){
        this.forCheckbox=true
        this.class=this.field.class==undefined?'form-check':'form-check '+this.field.class;
        //this.label=this.label==undefined?'':this.label;
        this.name=this.field.name==undefined?'checkbox'+(this.ncount):this.field.name;
        this.id=this.name;
        this.size=this.field.size==undefined?'':this.field.size;
         this.label=this.field.label==undefined?'':this.field.label;
        this.value=this.field.value==undefined?'':this.field.value;
     }
     else if(this.field.type=='radio'){
        this.forRadio=true
        this.class=this.field.class==undefined?'form-check':'form-check '+this.field.class;
        //this.label=this.label==undefined?'':this.label;
        this.name=this.field.name==undefined?'radio'+(this.ncount):this.field.name;
        this.id=this.name;
        this.size=this.field.size==undefined?'':this.field.size;
         this.label=this.field.label==undefined?'':this.field.label;
        this.value=this.field.value==undefined?'':this.field.value;
     }
      else if(this.field.type=='select'){
        this.forSelect=true
        this.class=this.field.class==undefined?'form-group':'form-group '+this.field.class;
        //this.label=this.label==undefined?'':this.label;
        this.name=this.field.name==undefined?'select'+(this.ncount):this.field.name;
        this.id=this.name;
         this.label=this.field.label==undefined?'':this.field.label;
         this.size=this.field.size==undefined?'100%':this.field.size;
        this.options=this.field.options==undefined?[]:this.field.options;
     }
     else if(this.field.type=='textarea'){
      this.forTextarea=true
      this.class=this.field.class==undefined?'form-group':'form-group '+this.field.class;
      //this.label=this.label==undefined?'':this.label;
      this.name=this.field.name==undefined?'select'+(this.ncount):this.field.name;
      this.id=this.name;
       this.label=this.field.label==undefined?'':this.field.label;
       this.size=this.field.size==undefined?'100%':this.field.size;
       this.placeholder='Enter '+this.label
      this.value=this.field.value==undefined?'':this.field.value;
       this.rows=this.field.rows==undefined?'3':this.field.rows;
   }
     else{
      this.forInput=true;
      this.type=this.field.type==undefined?'text':this.field.type;
      this.size=this.field.size==undefined?'100%':this.field.size;
      //this.inputClass='form-control '+this.class;
      this.class=this.field.class==undefined?'form-group':'form-group '+this.field.class;
      this.label=this.field.label==undefined?'':this.field.label;
      this.name=this.field.name==undefined?this.field.type+(this.ncount).toString():this.field.name;
      this.id=this.name;
      this.placeholder='Enter '+this.label
      
      this.value=this.field.value==undefined?'':this.field.value;
     }
    
    
    
  }

}
