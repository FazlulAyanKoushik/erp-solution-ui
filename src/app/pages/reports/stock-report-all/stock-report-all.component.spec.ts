import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockReportAllComponent } from './stock-report-all.component';

describe('StockReportAllComponent', () => {
  let component: StockReportAllComponent;
  let fixture: ComponentFixture<StockReportAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockReportAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockReportAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
