import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkashAgreementsComponent } from './bkash-agreements.component';

describe('BkashAgreementsComponent', () => {
  let component: BkashAgreementsComponent;
  let fixture: ComponentFixture<BkashAgreementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BkashAgreementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BkashAgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
