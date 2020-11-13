import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from './directives';
import { KeysPipe } from './pipes';

const Directives = [ClickOutsideDirective];
const Pipes = [KeysPipe];
@NgModule({
  declarations: [...Directives, ...Pipes],
  imports: [CommonModule],
  exports: [...Directives, ...Pipes],
})
export class SharedModule {}
