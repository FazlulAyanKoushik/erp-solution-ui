import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayExpenseComponent } from './pay-expense.component';

describe('PayExpenseComponent', () => {
  let component: PayExpenseComponent;
  let fixture: ComponentFixture<PayExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayExpenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
