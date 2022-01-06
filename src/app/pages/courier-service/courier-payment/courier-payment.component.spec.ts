import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierPaymentComponent } from './courier-payment.component';

describe('CourierPaymentComponent', () => {
  let component: CourierPaymentComponent;
  let fixture: ComponentFixture<CourierPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
