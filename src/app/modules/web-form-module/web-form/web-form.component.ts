import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Field } from 'src/app/models/interfaces/field.interface';
import { groupObject } from 'src/app/models/interfaces/groupObject.interface';
import formData from '../../../core/formData.json';
import { EMAIL_REGEX } from 'src/app/core/emailRegex';

@Component({
  selector: 'app-web-form',
  templateUrl: './web-form.component.html',
  styleUrls: ['./web-form.component.css'],
})
export class WebFormComponent implements OnInit {
  fields: Field[] = formData;
  form: FormGroup = new FormGroup({});
  errorMessage = '';

  constructor(private formBuilder: FormBuilder) {}

  get name() {
    return this.form.get('name');
  }

  get confirm() {
    return this.form.get('confirm');
  }

  get email() {
    return this.form.get('email');
  }

  ngOnInit(): void {
    const group: groupObject = {};
    this.fields.forEach((field: Field) => {
      group[field.field] = field.mandatory
        ? field.field === 'email'
          ? ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]]
          : ['', Validators.required]
        : [null];
    });
    console.log(group);
    this.form = this.formBuilder.group(group);
  }

  onSubmit() {
    if (this.form?.valid) {
      console.log(
        `Hello, my name is ${this.name?.value} with email address ${this.email?.value} and the value of my confirmation is ${this.confirm?.value}`
      );
    } else {
      console.log('The form inputs are invalid');
    }
  }

  isFieldHidden(field: Field): boolean {
    return field.hidden;
  }
}
