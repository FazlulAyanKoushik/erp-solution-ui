import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgedAccountPayableComponent } from './aged-account-payable.component';

describe('AgedAccountPayableComponent', () => {
  let component: AgedAccountPayableComponent;
  let fixture: ComponentFixture<AgedAccountPayableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgedAccountPayableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgedAccountPayableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
