import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierServicesComponent } from './courier-services.component';

describe('CourierServicesComponent', () => {
  let component: CourierServicesComponent;
  let fixture: ComponentFixture<CourierServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
