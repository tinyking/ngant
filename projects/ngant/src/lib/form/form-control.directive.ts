import { Directive, Host, HostListener, OnDestroy, OnInit, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NzSelectComponent } from 'ng-zorro-antd';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[nz-input][formControlName],nz-select[formControlName]'
})
export class FormControlDirective implements OnInit, OnDestroy {

  private destroy$ = new Subject();

  constructor(@Optional() private ngControl: NgControl,
              @Optional() @Host() private nzSelect: NzSelectComponent) {
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
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
