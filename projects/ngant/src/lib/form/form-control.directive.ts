import { Directive, Host, HostListener, OnDestroy, OnInit, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NzDatePickerComponent, NzSelectComponent } from 'ng-zorro-antd';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[nz-input][formControlName],nz-select[formControlName],nz-date-picker[formControlName]'
})
export class FormControlDirective implements OnInit, OnDestroy {

  private destroy$ = new Subject();

  constructor(@Optional() private ngControl: NgControl,
              @Optional() @Host() private nzSelect: NzSelectComponent,
              @Optional() @Host() private nzDatePicker: NzDatePickerComponent) {
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
    } else if (this.nzDatePicker) {
      this.nzDatePicker.nzOnOpenChange.pipe(
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
