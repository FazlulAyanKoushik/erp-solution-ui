import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentativeWiseSalesReportComponent } from './representative-wise-sales-report.component';

describe('RepresentativeWiseSalesReportComponent', () => {
  let component: RepresentativeWiseSalesReportComponent;
  let fixture: ComponentFixture<RepresentativeWiseSalesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepresentativeWiseSalesReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentativeWiseSalesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
