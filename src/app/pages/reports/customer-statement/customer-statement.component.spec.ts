import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerStatementComponent } from './customer-statement.component';

describe('CustomerStatementComponent', () => {
  let component: CustomerStatementComponent;
  let fixture: ComponentFixture<CustomerStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
