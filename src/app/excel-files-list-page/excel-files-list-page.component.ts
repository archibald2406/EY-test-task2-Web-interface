import { Component, OnInit } from '@angular/core';
import {ExcelFilesService} from '../services/excel-files.service';
import {ExcelFileList} from '../templates/excel-file-list';
import {ImportedFilesList} from '../templates/imported-files-list';

@Component({
  selector: 'app-excel-files-list-page',
  templateUrl: './excel-files-list-page.component.html',
  styleUrls: ['./excel-files-list-page.component.sass']
})
export class ExcelFilesListPageComponent implements OnInit {
  fileList: ExcelFileList[] = [];
  message = '';

  isLoaded = false;

  constructor(private excelFilesService: ExcelFilesService) { }

  ngOnInit() {
    this.excelFilesService.getExcelFilesList()
      .subscribe((filesList: string[]) => {
        for (const item of filesList) {
          this.fileList.push({
            fileName: item,
            importedFileId: '',
            isImportedToDB: false
          });
        }

        for (let i = 0; i < this.fileList.length; i++) {
          this.getImportedFileId(i.toString());
        }
        this.isLoaded = true;
      });
  }

  importFileToDB(filename: string, index: string) {
    this.excelFilesService.importExcelFilesToDB(filename)
      .subscribe((response: ResponseMessage) => {
        this.showMessage(response.message);
        this.getImportedFileId(index);
      });
  }

  private showMessage(message: string) {
    this.message = message;

    window.setTimeout(() => {
      this.message = '';
    }, 300000);
  }

  getImportedFileId(index: string) {
    this.excelFilesService.getImportedFilesList()
      .subscribe((fileList: ImportedFilesList[]) => {
        if (fileList.length) {
          for (const item of fileList) {
            if (`${item.title}` === this.fileList[index].fileName) {
              this.fileList[index].importedFileId = item.id;
              this.fileList[index].isImportedToDB = true;
              break;
            }
          }
        }
    });
  }
}
