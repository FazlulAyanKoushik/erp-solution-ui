import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewRevinueComponent } from './add-new-revinue.component';

describe('AddNewRevinueComponent', () => {
  let component: AddNewRevinueComponent;
  let fixture: ComponentFixture<AddNewRevinueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewRevinueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewRevinueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
