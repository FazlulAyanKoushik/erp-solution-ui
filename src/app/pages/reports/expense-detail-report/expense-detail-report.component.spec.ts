import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseDetailReportComponent } from './expense-detail-report.component';

describe('ExpenseDetailReportComponent', () => {
  let component: ExpenseDetailReportComponent;
  let fixture: ComponentFixture<ExpenseDetailReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseDetailReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
