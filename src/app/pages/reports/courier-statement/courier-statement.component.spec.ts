import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierStatementComponent } from './courier-statement.component';

describe('CourierStatementComponent', () => {
  let component: CourierStatementComponent;
  let fixture: ComponentFixture<CourierStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
