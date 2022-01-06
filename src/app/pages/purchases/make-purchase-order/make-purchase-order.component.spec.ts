import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakePurchaseOrderComponent } from './make-purchase-order.component';

describe('MakePurchaseOrderComponent', () => {
  let component: MakePurchaseOrderComponent;
  let fixture: ComponentFixture<MakePurchaseOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakePurchaseOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakePurchaseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
