import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewExpenseInventoryComponent } from './add-new-expense-inventory.component';

describe('AddNewExpenseInventoryComponent', () => {
  let component: AddNewExpenseInventoryComponent;
  let fixture: ComponentFixture<AddNewExpenseInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewExpenseInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewExpenseInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
