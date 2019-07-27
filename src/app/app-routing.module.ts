import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExcelFilesListPageComponent} from './excel-files-list-page/excel-files-list-page.component';
import {ImportedExcelFilesPageComponent} from './imported-excel-files-page/imported-excel-files-page.component';

const routes: Routes = [
  {path: '', component: ExcelFilesListPageComponent},
  {path: ':id', component: ImportedExcelFilesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
