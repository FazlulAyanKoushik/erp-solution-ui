import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasierWiseCashSummaryReportComponent } from './casier-wise-cash-summary-report.component';

describe('CasierWiseCashSummaryReportComponent', () => {
  let component: CasierWiseCashSummaryReportComponent;
  let fixture: ComponentFixture<CasierWiseCashSummaryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasierWiseCashSummaryReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasierWiseCashSummaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
