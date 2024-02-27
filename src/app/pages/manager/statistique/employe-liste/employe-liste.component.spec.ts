import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeListeComponent } from './employe-liste.component';

describe('EmployeListeComponent', () => {
  let component: EmployeListeComponent;
  let fixture: ComponentFixture<EmployeListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
