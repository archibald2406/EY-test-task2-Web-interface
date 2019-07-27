import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportedExcelFilesPageComponent } from './imported-excel-files-page.component';

describe('ImportedExcelFilesPageComponent', () => {
  let component: ImportedExcelFilesPageComponent;
  let fixture: ComponentFixture<ImportedExcelFilesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportedExcelFilesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportedExcelFilesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
