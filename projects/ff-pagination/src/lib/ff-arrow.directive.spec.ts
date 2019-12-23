import {FFArrowDirective} from './ff-arrow.directive';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, ElementRef} from '@angular/core';

export class MockElementRef extends ElementRef {
  constructor() {
    super(null);
  }
}

@Component({
  template: `
    <div *ffArrow>></div>`
})
class TestComponent {

}

describe('FFArrowDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FFArrowDirective, TestComponent],
      providers: [{provide: ElementRef, useClass: MockElementRef}]
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  }));

  it('', async(() => {
    expect(component).toBeTruthy();
  }));

});
