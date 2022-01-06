import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingInstallmentsComponent } from './upcoming-installments.component';

describe('UpcomingInstallmentsComponent', () => {
  let component: UpcomingInstallmentsComponent;
  let fixture: ComponentFixture<UpcomingInstallmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingInstallmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingInstallmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
