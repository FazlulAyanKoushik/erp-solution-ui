import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBankComponent } from './add-new-bank.component';

describe('AddNewBankComponent', () => {
  let component: AddNewBankComponent;
  let fixture: ComponentFixture<AddNewBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
