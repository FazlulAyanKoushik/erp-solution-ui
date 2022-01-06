import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTradersComponent } from './import-traders.component';

describe('ImportTradersComponent', () => {
  let component: ImportTradersComponent;
  let fixture: ComponentFixture<ImportTradersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportTradersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportTradersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
