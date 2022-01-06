import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemWiseSalesReportComponent } from './item-wise-sales-report.component';

describe('ItemWiseSalesReportComponent', () => {
  let component: ItemWiseSalesReportComponent;
  let fixture: ComponentFixture<ItemWiseSalesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemWiseSalesReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemWiseSalesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
