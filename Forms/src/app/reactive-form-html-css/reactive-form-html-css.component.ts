import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-html-css',
  templateUrl: './reactive-form-html-css.component.html',
  styleUrls: ['./reactive-form-html-css.component.css']
})
export class ReactiveFormHtmlCssComponent implements OnInit {

  reactiveForm: FormGroup;

  constructor() { }

  ngOnInit(): void{
    this.reactiveForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }

  
  onSubmit(){
    console.log(this.reactiveForm);
  }

}
