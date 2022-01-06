import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesRegisterComponent } from './sales-register.component';

describe('SalesRegisterComponent', () => {
  let component: SalesRegisterComponent;
  let fixture: ComponentFixture<SalesRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
