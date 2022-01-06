import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewEquipmentComponent } from './add-new-equipment.component';

describe('AddNewEquipmentComponent', () => {
  let component: AddNewEquipmentComponent;
  let fixture: ComponentFixture<AddNewEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
