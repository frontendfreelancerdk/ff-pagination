import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FFPaginationComponent } from './ff-pagination.component';

describe('FfPaginationComponent', () => {
  let component: FFPaginationComponent;
  let fixture: ComponentFixture<FFPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FFPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FFPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
