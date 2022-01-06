import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidedComponent } from './provided.component';

describe('ProvidedComponent', () => {
  let component: ProvidedComponent;
  let fixture: ComponentFixture<ProvidedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvidedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
