import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example-form2',
  templateUrl: './example-form2.component.html',
  styleUrls: ['./example-form2.component.less']
})
export class ExampleForm2Component implements OnInit {

  validateForm: FormGroup = new FormGroup({});
  dateRangeCtrl = new FormControl('', [Validators.required]);
  dateYearCtrl = new FormControl('', [Validators.required]);
  dateMonthCtrl = new FormControl(null, [Validators.required]);
  dateWeekCtrl = new FormControl(null, [Validators.required]);
  dateCtrl = new FormControl(null, [Validators.required]);
  userCtrl = new FormControl(null, [Validators.required]);
  emailCtrl = new FormControl(null, [Validators.email, Validators.required]);
  passwordCtrl = new FormControl('', [Validators.required]);
  // nickname: [null, [Validators.required]],
  // phoneNumberPrefix: ['+86'],
  // phoneNumber: [null, [Validators.required]],


  submitForm(): void {

  }

  constructor() {}

  ngOnInit(): void {
    // this.validateForm = this.fb.group({
    //   dateRange: [null, [Validators.required]],
    //   dateYear: [null, [Validators.required]],
    //   dateMonth: [null, [Validators.required]],
    //   dateWeek: [null, [Validators.required]],
    //   date: [null, [Validators.required]],
    //   user: [null, [Validators.required]],
    //   email: [null, [Validators.email, Validators.required]],
    //   password: [null, [Validators.required]],
    //   checkPassword: [null, [Validators.required, this.confirmationValidator]],
    //   nickname: [null, [Validators.required]],
    //   phoneNumberPrefix: ['+86'],
    //   phoneNumber: [null, [Validators.required]],
    //   website: [null, [Validators.required]],
    //   captcha: [null, [Validators.required]],
    //   agree: [false]
    // });
  }

}
