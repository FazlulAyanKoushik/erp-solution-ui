import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCashComponent } from './add-new-cash.component';

describe('AddNewCashComponent', () => {
  let component: AddNewCashComponent;
  let fixture: ComponentFixture<AddNewCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewCashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
