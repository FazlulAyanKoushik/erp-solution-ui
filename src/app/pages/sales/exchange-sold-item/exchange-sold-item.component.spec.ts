import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeSoldItemComponent } from './exchange-sold-item.component';

describe('ExchangeSoldItemComponent', () => {
  let component: ExchangeSoldItemComponent;
  let fixture: ComponentFixture<ExchangeSoldItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeSoldItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeSoldItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
