import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FFPaginationComponent} from './ff-pagination.component';
import {FFArrowDirective} from './ff-arrow.directive';
import {FFIndicatorDirective} from './ff-indicator.directive';
import {FFIndicatorNumberDirective} from './ff-indicator-number.directive';


@NgModule({
  declarations: [FFPaginationComponent, FFArrowDirective, FFIndicatorDirective, FFIndicatorNumberDirective],
  imports: [CommonModule],
  exports: [FFPaginationComponent, FFArrowDirective, FFIndicatorDirective, FFIndicatorNumberDirective]
})
export class FFPaginationModule {
}
