import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcelFilesService } from './services/excel-files.service';
import { ExcelFilesListPageComponent } from './excel-files-list-page/excel-files-list-page.component';
import {HttpClientModule} from '@angular/common/http';
import { ImportedExcelFilesPageComponent } from './imported-excel-files-page/imported-excel-files-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ExcelFilesListPageComponent,
    ImportedExcelFilesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ExcelFilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
