import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePreferenceComponent } from './liste-preference.component';

describe('ListePreferenceComponent', () => {
  let component: ListePreferenceComponent;
  let fixture: ComponentFixture<ListePreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePreferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
