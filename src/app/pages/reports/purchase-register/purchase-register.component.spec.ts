import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRegisterComponent } from './purchase-register.component';

describe('PurchaseRegisterComponent', () => {
  let component: PurchaseRegisterComponent;
  let fixture: ComponentFixture<PurchaseRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
