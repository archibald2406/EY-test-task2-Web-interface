import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelFilesListPageComponent } from './excel-files-list-page.component';

describe('ExcelFilesListPageComponent', () => {
  let component: ExcelFilesListPageComponent;
  let fixture: ComponentFixture<ExcelFilesListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelFilesListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelFilesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
