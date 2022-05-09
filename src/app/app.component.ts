import {Component, OnInit} from '@angular/core';
import {DataService} from "./data.service";
import {delay, Observable, of, tap} from "rxjs";
import {FilterMatchMode, FilterService} from "primeng/api";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  matchModeOptions = [
    { label: "Contains", value: FilterMatchMode.CONTAINS }
  ];

  title      = 'data-table';
  showLoader = true;
  columns_1  = [
    {
      name: 'WorkStation',
      displayName: 'WorkStation',
      filter: ''
    },
    {
      name: 'CustomerCode',
      displayName: 'Customer Code',
      filter: ''
    },
    {
      name: 'ProductStockCode',
      displayName: 'Product Stock Code',
      filter: ''
    },
    {
      name: 'MaterialName',
      displayName: 'Material Name',
      filter: ''
    },
    {
      name: 'Unit',
      displayName: 'Unit',
      filter: ''
    }
  ];
  columns_2  = [
    {
      name: 'toolCapacity',
      displayName: 'Tool Capacity',
      filter: ''
    },
    {
      name: 'totalToolPiece',
      displayName: 'Total Tool Piece',
      filter: ''
    },
    {
      name: 'toolCode',
      displayName: 'Tool Code',
      filter: ''
    },
    {
      name: 'toolTotalCapacity',
      displayName: 'Tool Total Capacity',
      filter: ''
    }
  ];
  columns_3  = [
    {
      name: 'lastProductionDate',
      displayName: 'Last Production Date',
      filter: ''
    },
    {
      name: 'lastProductQuantity',
      displayName: 'Last Product Quantity',
      filter: ''
    }
  ];

  wareHouses$      : Observable<any[]> = of([]);
  tools$           : Observable<any[]> = of([]);
  productQuantity$ : Observable<any[]> = of([]);

  constructor(
    private dataService   : DataService,
    private filterService : FilterService,
  ) {}

  ngOnInit(): void {
    this.wareHouses$ = this.dataService.getWareHouses().pipe(
      delay( 1000), // To simulate loading
      tap( () => this.showLoader = false)
    );
    this.tools$ = this.dataService.getToolsData().pipe(
      delay( 1000), // To simulate loading
      tap( () => this.showLoader = false),
    );
    this.productQuantity$ = this.dataService.getProductQuantity().pipe(
      delay( 1000), // To simulate loading
      tap( () => this.showLoader = false),
      tap( val => {
        console.log( val )
      })
    );
  }
}
