import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSaleComponent } from './add-new-sale.component';

describe('AddNewSaleComponent', () => {
  let component: AddNewSaleComponent;
  let fixture: ComponentFixture<AddNewSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
