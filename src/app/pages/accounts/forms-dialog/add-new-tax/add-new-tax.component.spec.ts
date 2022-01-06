import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTaxComponent } from './add-new-tax.component';

describe('AddNewTaxComponent', () => {
  let component: AddNewTaxComponent;
  let fixture: ComponentFixture<AddNewTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewTaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
