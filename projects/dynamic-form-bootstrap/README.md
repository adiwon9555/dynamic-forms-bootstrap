# Dynamic Forms Bootstrap : -

    "Automate the work of writing multiple lines of code for bootstrap form by simply using a json data to build your desired form."

This is a library to dynamically create a bootstrap form by just supplying the JSON data.

Prerequisites :- 
1. Need to have bootstap files or link to the bootstrap CDN in the main app, otherwise the bootstrap feel will not be there.

Installation :-
 `npm i dynamic-form-bootstrap`

Github link:-
https://github.com/adiwon9555/dynamic-forms-bootstrap

To use in your app :-

1.  Import in your app.module.ts

       `import {DynamicFormBootstrapModule} from 'dynamic-form-bootstrap'`

    Add to the imports array:-
    
        imports: [
            ...
            DynamicFormBootstrapModule
        ]

2.  Create a json data in the component you want to use :-
    Eg:-
    ```
     public fields=[
    {
      type:'email',
      label:'Email',
      name:'email1',
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
      type:'submit',
      label:'Go!',
      name:'g',
      value:'none',
      size:'300px'
    }
    ]
    ```

3. Use this JSON data in your html :-

    ```
     <div class="container" >
         <form method="get" action="a.html">
                <d-form-b *ngFor='let field of fields' [field]='field'></d-form-b>
         </form>
     </div>
    ```


Note:- 
1. The type that can be used in json are - all kinds of text input(email,number,text,etc), date, radio, checkbox, textarea, select.
2. The attributes that can be added to these types are - label,name,value,size,class.
3. For radio type, name has to same.
4. The textarea type, number of rows can be defined using rows attribute as shown in example.
