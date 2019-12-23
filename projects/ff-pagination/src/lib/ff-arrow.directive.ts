import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[ffArrow]'
})
export class FFArrowDirective {

  constructor(public el: TemplateRef<any>) {
  }

}
