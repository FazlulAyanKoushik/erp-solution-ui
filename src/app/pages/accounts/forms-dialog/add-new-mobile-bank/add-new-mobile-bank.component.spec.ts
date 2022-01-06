import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMobileBankComponent } from './add-new-mobile-bank.component';

describe('AddNewMobileBankComponent', () => {
  let component: AddNewMobileBankComponent;
  let fixture: ComponentFixture<AddNewMobileBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewMobileBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewMobileBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
