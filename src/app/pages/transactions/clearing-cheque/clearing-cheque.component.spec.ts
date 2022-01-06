import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearingChequeComponent } from './clearing-cheque.component';

describe('ClearingChequeComponent', () => {
  let component: ClearingChequeComponent;
  let fixture: ComponentFixture<ClearingChequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearingChequeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearingChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
