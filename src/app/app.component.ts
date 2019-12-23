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
