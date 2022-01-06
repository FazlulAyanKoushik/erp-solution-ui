import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewIncomeComponent } from './add-new-income.component';

describe('AddNewIncomeComponent', () => {
  let component: AddNewIncomeComponent;
  let fixture: ComponentFixture<AddNewIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
