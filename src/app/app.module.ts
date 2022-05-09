import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";
import { DataTableComponent } from './data-table/data-table.component';
import { TableModule } from "primeng/table";
import { HttpClientModule } from "@angular/common/http";
import { OverlayPanelModule } from "primeng/overlaypanel";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    OverlayPanelModule,
    InputTextModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
