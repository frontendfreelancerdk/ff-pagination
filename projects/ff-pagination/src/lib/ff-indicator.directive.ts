import {Directive, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: '[ffIndicator]'
})
export class FFIndicatorDirective {
  @Input() counter: (idx) => void;

  constructor(public el: TemplateRef<any>) {
  }


}
