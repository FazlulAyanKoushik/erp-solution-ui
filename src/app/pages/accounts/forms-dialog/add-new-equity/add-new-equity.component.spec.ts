import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewEquityComponent } from './add-new-equity.component';

describe('AddNewEquityComponent', () => {
  let component: AddNewEquityComponent;
  let fixture: ComponentFixture<AddNewEquityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewEquityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewEquityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
