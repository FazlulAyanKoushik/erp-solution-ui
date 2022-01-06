import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCostOfSalesComponent } from './add-new-cost-of-sales.component';

describe('AddNewCostOfSalesComponent', () => {
  let component: AddNewCostOfSalesComponent;
  let fixture: ComponentFixture<AddNewCostOfSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewCostOfSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCostOfSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
