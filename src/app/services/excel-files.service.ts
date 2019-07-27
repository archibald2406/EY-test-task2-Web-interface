import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExcelFilesService {
  private baseUrl = 'http://localhost:3000/';

  constructor(public http: HttpClient) {}

  getExcelFilesList() {
    return this.http.get(`${this.baseUrl}files-list`);
  }

  getImportedFilesList() {
    return this.http.get(`${this.baseUrl}imported-files`);
  }

  getImportedFileById(id: string) {
    return this.http.get(`${this.baseUrl}imported-files-title/${id}`);
  }

  getExcelFilesDataFromDB(id: string) {
    return this.http.get(`${this.baseUrl}imported-files/${id}`);
  }

  importExcelFilesToDB(fileName: string) {
    return this.http.post(this.baseUrl, {fileName});
  }
}
