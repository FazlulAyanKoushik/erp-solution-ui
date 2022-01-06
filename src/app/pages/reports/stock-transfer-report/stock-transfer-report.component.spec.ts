import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTransferReportComponent } from './stock-transfer-report.component';

describe('StockTransferReportComponent', () => {
  let component: StockTransferReportComponent;
  let fixture: ComponentFixture<StockTransferReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockTransferReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTransferReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
