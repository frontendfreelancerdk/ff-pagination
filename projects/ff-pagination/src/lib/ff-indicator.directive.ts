import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[ffIndicator]'
})
export class FFIndicatorDirective {
  constructor(public el: TemplateRef<any>) {
  }
}
