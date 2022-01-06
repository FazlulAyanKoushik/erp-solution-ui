import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseSummaryReportComponent } from './expense-summary-report.component';

describe('ExpenseSummaryReportComponent', () => {
  let component: ExpenseSummaryReportComponent;
  let fixture: ComponentFixture<ExpenseSummaryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseSummaryReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseSummaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
