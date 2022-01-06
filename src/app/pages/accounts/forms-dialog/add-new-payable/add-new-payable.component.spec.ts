import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPayableComponent } from './add-new-payable.component';

describe('AddNewPayableComponent', () => {
  let component: AddNewPayableComponent;
  let fixture: ComponentFixture<AddNewPayableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewPayableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPayableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
