/* tslint:disable:max-line-length */
import { Directive, Host, HostListener, OnDestroy, OnInit, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';
import {
  NzDatePickerComponent,
  NzMonthPickerComponent, NzRangePickerComponent,
  NzSelectComponent,
  NzWeekPickerComponent,
  NzYearPickerComponent
} from 'ng-zorro-antd';
import { of, Subject } from 'rxjs';
import { filter, switchMap, takeUntil } from 'rxjs/operators';

@Directive({
  selector: `[ngant-validate],[formControlName],[formControl]`
})
export class FormControlDirective implements OnInit, OnDestroy {

  private destroy$ = new Subject();

  constructor(@Optional() private ngControl: NgControl,
              @Optional() @Host() private nzSelect: NzSelectComponent,
              @Optional() @Host() private nzDatePicker: NzDatePickerComponent,
              @Optional() @Host() private nzWeekPicker: NzWeekPickerComponent,
              @Optional() @Host() private nzMonthPicker: NzMonthPickerComponent,
              @Optional() @Host() private nzYearPicker: NzYearPickerComponent,
              @Optional() @Host() private nzRangePicker: NzRangePickerComponent
  ) {
  }

  @HostListener('blur')
  onBlur() {
    if (this.ngControl && this.ngControl.control) {
      const control = this.ngControl.control;
      control.markAsTouched();
      control.updateValueAndValidity();
    }
  }


  ngOnInit(): void {
    if (this.nzSelect) {
      this.nzSelect.nzBlur.pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.onBlur();
      });
    } else {
      of(this.nzDatePicker, this.nzWeekPicker, this.nzMonthPicker, this.nzYearPicker, this.nzRangePicker)
        .pipe(
          filter(value => !!value),
          switchMap(value => value.nzOnOpenChange)
        ).pipe(
        takeUntil(this.destroy$)).subscribe(() => {
        this.onBlur();
      });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
