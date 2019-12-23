import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FFPaginationComponent} from './ff-pagination.component';
import {Component, ViewChild} from '@angular/core';
import {FFIndicatorNumberDirective} from './ff-indicator-number.directive';
import {FFArrowDirective} from './ff-arrow.directive';
import {FFIndicatorDirective} from './ff-indicator.directive';
import {By} from '@angular/platform-browser';


@Component({
  template: `
    <ng-container *ngFor="let item of itemsToshow"><p>{{item}}</p></ng-container>

    <ff-pagination [items]="allItems" [maxItems]="maxItems" (pageChanged)="onPageChanges($event)">
      <div *ffArrow class="myArrow"> ></div>
      <div *ffIndicator ffIndicatorNumber class="myIndicator"></div>
    </ff-pagination>

    <button (click)="appComponentRef.prev()">Some external 'prev' button</button>
    <button (click)="appComponentRef.next()">Some external 'next' button</button>`
})
class TestComponent {
  @ViewChild(FFPaginationComponent, {static: true}) appComponentRef: FFPaginationComponent;
  allItems: any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  itemsToshow: any[];
  maxItems: number = 4;

  onPageChanges(e: any[]) {
    this.itemsToshow = e;
  }
}


describe('FFPaginationComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let paginationComponent: FFPaginationComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FFPaginationComponent, TestComponent, FFIndicatorNumberDirective, FFArrowDirective, FFIndicatorDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    paginationComponent = fixture.debugElement.componentInstance.appComponentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create FFPaginationComponent', () => {
    expect(paginationComponent).toBeTruthy();
  });

  it('should call pageChanged when items array was changed', async(() => {
    spyOn(paginationComponent.pageChanged, 'emit');
    component.allItems = [0, 1, 2, 3, 4, 5, 6, 7];
    fixture.detectChanges();
    expect(paginationComponent.pageChanged.emit).toHaveBeenCalled();
  }));

  it('should call pageChanged when max items was changed', async(() => {
    spyOn(paginationComponent.pageChanged, 'emit');
    component.maxItems = 2;
    fixture.detectChanges();
    expect(paginationComponent.pageChanged.emit).toHaveBeenCalled();
  }));

  it('pageChanged should send correct value', async(() => {
    spyOn(paginationComponent.pageChanged, 'emit');
    component.allItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    component.maxItems = 5;
    fixture.detectChanges();
    expect(paginationComponent.pageChanged.emit).toHaveBeenCalledWith([1, 2, 3, 4, 5]);
    paginationComponent.last();
    fixture.detectChanges();
    expect(paginationComponent.pageChanged.emit).toHaveBeenCalledWith([6, 7, 8, 9, 0]);
    paginationComponent.first();
    fixture.detectChanges();
    expect(paginationComponent.pageChanged.emit).toHaveBeenCalledWith([1, 2, 3, 4, 5]);
    component.maxItems = 2;
    fixture.detectChanges();
    expect(paginationComponent.pageChanged.emit).toHaveBeenCalledWith([1, 2]);
    paginationComponent.selectPage(1);
    fixture.detectChanges();
    expect(paginationComponent.pageChanged.emit).toHaveBeenCalledWith([3, 4]);
    component.allItems = [11, 12, 13, 14, 15, 16];
    fixture.detectChanges();
    expect(paginationComponent.pageChanged.emit).toHaveBeenCalledWith([11, 12]);
  }));

  it('should create indicators when *ffIndicator directive presents', async(() => {
    expect(paginationComponent.indicator).toBeTruthy();
    component.allItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    component.maxItems = 3;
    fixture.detectChanges();
    const indicators = fixture.debugElement.queryAll(By.css('.ff-pagination-indicator'));
    expect(indicators.length).toBe(4);
  }));

  it('should create arrows when *ffArrow directive presents', async(() => {
    expect(paginationComponent.arrow).toBeTruthy();
    const arrows = fixture.debugElement.queryAll(By.css('.ff-pagination-btn'));
    expect(arrows.length).toBe(2);
  }));
});
