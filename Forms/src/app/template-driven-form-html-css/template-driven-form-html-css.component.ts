import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form-html-css',
  templateUrl: './template-driven-form-html-css.component.html',
  styleUrls: ['./template-driven-form-html-css.component.css']
})
export class TemplateDrivenFormHtmlCssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);

    // Display details someware before they are lost: Tutorial/Angular/AngularForms/6.Retrieving Form Data and Reseting Form

    // Ova forma kada se submituje ce se i resetovati i bice prazna i pokazivace nam da je forma invalid iako se vec submitpovala
    form.reset();
  }

}
