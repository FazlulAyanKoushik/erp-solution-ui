import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitLossStatementComponent } from './profit-loss-statement.component';

describe('ProfitLossStatementComponent', () => {
  let component: ProfitLossStatementComponent;
  let fixture: ComponentFixture<ProfitLossStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitLossStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitLossStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
