import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeQuotationComponent } from './make-quotation.component';

describe('MakeQuotationComponent', () => {
  let component: MakeQuotationComponent;
  let fixture: ComponentFixture<MakeQuotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeQuotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
