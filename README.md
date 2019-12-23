[![Build Status](https://travis-ci.org/frontendfreelancerdk/ff-pagination.svg?branch=master)](https://travis-ci.org/frontendfreelancerdk/ff-pagination)

# ff-pagination

##Getting started

### Installation

#####To install this library, run:

```bash
$ npm install ff-pagination --save
```

##### Include to your module
 `app.module.ts`

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import library
import {FFPaginationModule} from 'ff-pagination';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Specify library as an import
    FFPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once ff-pagination is imported, you can use its component in your Angular application:

```html
<!-- Now you can use library component in your.component.html -->
<!-- Put your items array to [items] property. It's required.-->
<ff-pagination [items]="[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]">
<!-- If you want to use arrows put RIGHT arrow as content and mark it with *ffArrow directive -->
  <div *ffArrow class="myArrow"> > </div>
<!-- The same with indicators (navigations). But use *ffIndicator directive. 
If you want that component inserts as inner html page number 
you should mark indicator also with ffIndicatorNumber directive -->
  <div *ffIndicator ffIndicatorNumber class="myIndicator"></div>
</ff-pagination>
```

## API

Selector: `ff-pagination`  
Exported as: `ffPagination`  

#### Properties

```typescript
  @Input() items: any[];
```
>  The [items] attribute is required attribute. You should put here array with your data, that you want to paginate

```typescript
  @Input() currentPage: number = 0;
```
> The [currentPage] attribute set current page by number.
> To set third slide as active use:
> <ff-pagination [currentPage]="2"></ff-pagination> 

```typescript
  @Input() maxItems: number = 3;
```
>  The [maxItems] attribute sets max length of items in each page. By default - 3

```typescript
  @Input() hideWhenLessThenOnePage: boolean = true;
```
>  If [hideWhenLessThenOnePage] is true - hide pagination (arrows/indicators) when your 
> items array has only 1 page to show. Default value is true

```typescript
  @Output() pageChanged: EventEmitter<any[]>;
```
> Event triggered when page was changed and send current page (part of your items data, that you can show in current page)


#### Methods

```typescript
  next: ()=>: number; 
```
> You can call this method to show next page. Method returns current page number after switched.

```typescript
  prev: ()=>: number; 
```
>  You can call this method to show previous page. Method returns current page number after switched.

```typescript
  first: ()=>: number; 
```
> Selected first page

```typescript
  last: ()=>: number; 
```
>  Selected last page

```typescript
  selectPage: (id: number)=>: number; 
```
> For selecting some page by number. E.g from external navigation.

```typescript
  isFirst: ()=>: boolean; 
  isLast: ()=>: boolean; 
```
> isFirst() and isLast() methods shows if current page is first/last. 

## Example

`app.component.html`
```html
<ng-container *ngFor="let item of itemsToshow"><p>{{item}}</p></ng-container>

<ff-pagination [items]="allItems" [maxItems]="3" (pageChanged)="onPageChanges($event)"
               #myPagination="ffPagination">
  <div *ffArrow class="myArrow"> ></div>
  <div *ffIndicator ffIndicatorNumber class="myIndicator"></div>
</ff-pagination>

<button (click)="myPagination.prev()">Some external 'prev' button</button>
<button (click)="myPagination.next()">Some external 'next' button</button>

```

`app.component.css`
```css
.myIndicator {
  border: 1px solid darkslategray;
  margin: 3px;
  width: 20px;
  height: 20px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  user-select: none;
}

.myArrow {
  color: darkslategray;
  font-size: 30px;
  user-select: none;
}

```

`app.component.ts`
```typescript
import {Component} from '@angular/core';

@Component({
  selector: 'ff-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  allItems: any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  itemsToshow: any[];

  onPageChanges(e: any[]) {
    this.itemsToshow = e;
    console.log(this.itemsToshow);
  }
}


```
## License

MIT © [Frontend Freelancer](mailto:developer@frontend-freelancer.com)
