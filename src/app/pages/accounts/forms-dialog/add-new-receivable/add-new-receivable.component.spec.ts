import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewReceivableComponent } from './add-new-receivable.component';

describe('AddNewReceivableComponent', () => {
  let component: AddNewReceivableComponent;
  let fixture: ComponentFixture<AddNewReceivableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewReceivableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewReceivableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
