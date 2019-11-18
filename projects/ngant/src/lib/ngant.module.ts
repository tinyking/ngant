import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
import { FormControlDirective } from './form/form-control.directive';

@NgModule({
  declarations: [TableComponent, FormControlDirective],
  imports: [
  ],
  exports: [
    FormControlDirective
  ]
})
export class NgantModule { }
