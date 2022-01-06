import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnSoldItemComponent } from './return-sold-item.component';

describe('ReturnSoldItemComponent', () => {
  let component: ReturnSoldItemComponent;
  let fixture: ComponentFixture<ReturnSoldItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnSoldItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnSoldItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
