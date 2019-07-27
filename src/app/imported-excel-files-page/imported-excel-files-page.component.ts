import { Component, OnInit } from '@angular/core';
import {ExcelFilesService} from '../services/excel-files.service';
import {ActivatedRoute, Params} from '@angular/router';
import {ExcelFilename} from '../templates/excel-filename';

@Component({
  selector: 'app-imported-excel-files-page',
  templateUrl: './imported-excel-files-page.component.html',
  styleUrls: ['./imported-excel-files-page.component.sass']
})
export class ImportedExcelFilesPageComponent implements OnInit {
  fileName: string;
  dataFromDb: ImportedFileFromDb;
  groupedBillsList: GroupedBillList = {
    incomingBalance: [],
    turns: [],
    outcomingBalance: []
  };
  currentClassTitle = '';
  currentGroupedBillNumber = '';
  isLoaded = false;

  constructor(private route: ActivatedRoute,
              private excelFilesService: ExcelFilesService) {}

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.excelFilesService.getImportedFileById(params.id)
          .subscribe((fileName: ExcelFilename) => {
            if (fileName) {
              this.fileName = fileName.fileName;
            }
          });
        this.excelFilesService.getExcelFilesDataFromDB(params.id)
          .subscribe((dataFromDb: ImportedFileFromDb) => {
            this.dataFromDb = dataFromDb;
            this.fillGroupedBillsList();
            this.isLoaded = true;
          });
      });
  }

  fillGroupedBillsList() {
    for (const item of this.dataFromDb.incomingBalance) {
      if (item.groupedBillNumber !== this.currentGroupedBillNumber) {
        this.currentGroupedBillNumber = item.groupedBillNumber;
        this.groupedBillsList.incomingBalance.push({
          groupedBillNumber: item.groupedBillNumber,
          groupedAsset: item.groupedAsset,
          groupedLiability: item.groupedLiability,
          title: item.title
        });
      }
    }
    for (const item of this.dataFromDb.turns) {
      if (item.groupedBillNumber !== this.currentGroupedBillNumber) {
        this.currentGroupedBillNumber = item.groupedBillNumber;
        this.groupedBillsList.turns.push({
          groupedBillNumber: item.groupedBillNumber,
          groupedDebit: item.groupedDebit,
          groupedCredit: item.groupedCredit,
          title: item.title
        });
      }
    }
    for (const item of this.dataFromDb.outcomingBalance) {
      if (item.groupedBillNumber !== this.currentGroupedBillNumber) {
        this.currentGroupedBillNumber = item.groupedBillNumber;
        this.groupedBillsList.outcomingBalance.push({
          groupedBillNumber: item.groupedBillNumber,
          groupedAsset: item.groupedAsset,
          groupedLiability: item.groupedLiability,
          title: item.title
        });
      }
    }
  }

  getRowSpan(classTitle: string, billsArray: ImportedFileFromDb | GroupedBillList) {
    let counter = 0;
    for (const item of billsArray.incomingBalance) {
      if (item.title === classTitle) {
        counter++;
      }
    }
    return counter;
  }

  titleIsNotEqual(index: number, billsArray: ImportedFileFromDb | GroupedBillList) {
    if (this.currentClassTitle !== billsArray.incomingBalance[index].title) {
      this.currentClassTitle = billsArray.incomingBalance[index].title;
      return true;
    }
    return false;
  }
}
