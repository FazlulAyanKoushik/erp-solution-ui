import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthToDateSalesComponent } from './month-to-date-sales.component';

describe('MonthToDateSalesComponent', () => {
  let component: MonthToDateSalesComponent;
  let fixture: ComponentFixture<MonthToDateSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthToDateSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthToDateSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
