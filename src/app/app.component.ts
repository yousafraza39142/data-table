import {Component, OnInit} from '@angular/core';
import { columns } from "./data";
import {DataService} from "./data.service";
import {delay, Observable, of, tap} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor( private dataService: DataService ) {}

  title      = 'data-table';
  showLoader = true;
  columns    = columns;

  data$ : Observable<any[]> = of([]);

  ngOnInit(): void {
    this.data$ = this.dataService.getData().pipe(
      delay( 1000), // To simulate loading
      tap( val => this.showLoader = false)
    );
  }
}
