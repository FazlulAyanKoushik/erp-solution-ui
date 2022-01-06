import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerWiseItemProfitReportComponent } from './customer-wise-item-profit-report.component';

describe('CustomerWiseItemProfitReportComponent', () => {
  let component: CustomerWiseItemProfitReportComponent;
  let fixture: ComponentFixture<CustomerWiseItemProfitReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerWiseItemProfitReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerWiseItemProfitReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
