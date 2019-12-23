import {Directive, ElementRef} from '@angular/core';


@Directive({
  selector: '[ffIndicatorNumber]'
})
export class FFIndicatorNumberDirective {

  constructor(public el: ElementRef) {
  }
}
