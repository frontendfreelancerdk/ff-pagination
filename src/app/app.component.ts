import {AfterViewInit, Component, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'ff-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChildren('t') t;
  title = 'ff-pagination-app';

  onPageChanges(e: any[]) {
    console.log(e);
  }

  test = (x, el) => {
    console.log(x, el.nativeElement);

  };

  ngAfterViewInit(): void {
    console.log(this.t);
  }
}
