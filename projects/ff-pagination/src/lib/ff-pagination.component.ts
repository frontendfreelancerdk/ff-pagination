import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  ContentChild, ContentChildren,
  EventEmitter,
  Inject,
  Input, OnDestroy,
  OnInit,
  Output,
  PLATFORM_ID, QueryList
} from '@angular/core';
import {FFArrowDirective} from './ff-arrow.directive';
import {FFIndicatorDirective} from './ff-indicator.directive';
import {isPlatformBrowser} from '@angular/common';
import {FFIndicatorNumberDirective} from './ff-indicator-number.directive';
import {Subscription} from 'rxjs';

@Component({
  selector: 'ff-pagination',
  templateUrl: './ff-pagination.component.html',
  styleUrls: ['./ff-pagination.component.scss'],
  exportAs: 'ffPagination'
})

export class FFPaginationComponent implements OnInit, AfterContentInit, OnDestroy {
  @ContentChild(FFArrowDirective, {static: false}) arrow: FFArrowDirective;
  @ContentChild(FFIndicatorDirective, {static: false}) indicator: FFIndicatorDirective;
  @ContentChildren(FFIndicatorNumberDirective) numbers: QueryList<FFIndicatorNumberDirective>;
  private _init: boolean = false;
  private _items: any[] = [];
  private subscription: Subscription;

  get items(): any[] {
    return this._items;
  }

  @Input() set items(val: any[]) {
    this._items = val;
    if (this._init) {
      this.createPagesArr();
    }
  }

  private _maxItems: number = 3;
  get maxItems(): number {
    return this._maxItems;
  }

  @Input() set maxItems(val: number) {
    this._maxItems = val;
    if (this._init) {
      this.createPagesArr();
    }
  }

  @Input() hideWhenLessThenOnePage: boolean = true;

  private _currentPage: number = 0;
  get currentPage(): number {
    return this._currentPage;
  }

  public pages: number[] = [];

  @Input() set currentPage(val: number) {
    this._currentPage = val;
  }

  @Output() pageChanged: EventEmitter<any[]> = new EventEmitter(true);

  constructor(@Inject(PLATFORM_ID) private _platformId, private _cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.createPagesArr();
    this._init = true;
  }

  private createPagesArr() {
    let pageId = 0;
    this.currentPage = 0;
    this.pages = [];
    for (let i = 0, len = this.items.length; i < len; i++) {
      if (!(i % this.maxItems)) {
        this.pages.push(pageId++);
      }
    }
    this.emit();
  }

  prev() {
    if (!this.isFirst()) {
      this.currentPage -= 1;
      this.emit();
      return this.currentPage;
    }
  }

  next() {
    if (!this.isLast()) {
      this.currentPage += 1;
      this.emit();
      return this.currentPage;
    }
  }

  selectPage(n) {
    if (n !== this.currentPage) {
      this.currentPage = n;
      this.emit();
      return this.currentPage;
    }
  }

  isFirst() {
    return this.currentPage === 0;
  }

  isLast() {
    return this.currentPage === this.pages.length - 1;
  }

  first() {
    if (!this.isFirst()) {
      this.currentPage = 0;
      this.emit();
      return this.currentPage;
    }
  }

  last() {
    if (!this.isLast()) {
      this.currentPage = this.pages.length - 1;
      this.emit();
    }
  }

  private emit() {
    const startIdx = this.currentPage * this.maxItems;
    this.pageChanged.emit(this.items.slice(startIdx, startIdx + this.maxItems));
  }

  ngAfterContentInit(): void {
    if (isPlatformBrowser(this._platformId)) {
      this.subscription = this.numbers.changes.subscribe((queryList) => {
        let idx = 0;
        queryList.map(item => {
          item.el.nativeElement.innerHTML = ++idx;
        });
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
