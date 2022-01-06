import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceSheetAllComponent } from './balance-sheet-all.component';

describe('BalanceSheetAllComponent', () => {
  let component: BalanceSheetAllComponent;
  let fixture: ComponentFixture<BalanceSheetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceSheetAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceSheetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
