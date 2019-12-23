import {FFIndicatorNumberDirective} from './ff-indicator-number.directive';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, ElementRef} from '@angular/core';

export class MockElementRef extends ElementRef {
  constructor() {
    super(null);
  }
}

@Component({
  template: `<div ffIndicatorNumber>x</div>`
})
class TestComponent {

}

describe('FFIndicatorNumberDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FFIndicatorNumberDirective, TestComponent ],
      providers: [{provide: ElementRef, useClass: MockElementRef}]
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  }));

  it('', async(() => {
    expect(component).toBeTruthy();
  }));

});
