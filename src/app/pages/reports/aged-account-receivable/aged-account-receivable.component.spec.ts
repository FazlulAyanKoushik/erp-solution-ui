import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgedAccountReceivableComponent } from './aged-account-receivable.component';

describe('AgedAccountReceivableComponent', () => {
  let component: AgedAccountReceivableComponent;
  let fixture: ComponentFixture<AgedAccountReceivableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgedAccountReceivableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgedAccountReceivableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
