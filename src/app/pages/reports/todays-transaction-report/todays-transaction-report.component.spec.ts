import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysTransactionReportComponent } from './todays-transaction-report.component';

describe('TodaysTransactionReportComponent', () => {
  let component: TodaysTransactionReportComponent;
  let fixture: ComponentFixture<TodaysTransactionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysTransactionReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysTransactionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
