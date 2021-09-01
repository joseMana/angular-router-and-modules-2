import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleIconDirective } from './directives/role-icon.directive';
import { MottoReplacerPipe } from './pipes/motto-replacer.pipe';
import { RoleCheckDirective } from './directives/role-check.directive';

@NgModule({
  declarations: [
    RoleIconDirective,
    MottoReplacerPipe,
    RoleCheckDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RoleIconDirective,
    MottoReplacerPipe,
    RoleCheckDirective
  ]
})
export class SharedModule { }
