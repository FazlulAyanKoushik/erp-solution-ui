import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewInventoryComponent } from './add-new-inventory.component';

describe('AddNewInventoryComponent', () => {
  let component: AddNewInventoryComponent;
  let fixture: ComponentFixture<AddNewInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
