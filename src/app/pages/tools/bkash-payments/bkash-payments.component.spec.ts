import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkashPaymentsComponent } from './bkash-payments.component';

describe('BkashPaymentsComponent', () => {
  let component: BkashPaymentsComponent;
  let fixture: ComponentFixture<BkashPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BkashPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BkashPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
