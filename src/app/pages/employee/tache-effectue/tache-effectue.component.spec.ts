import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheEffectueComponent } from './tache-effectue.component';

describe('TacheEffectueComponent', () => {
  let component: TacheEffectueComponent;
  let fixture: ComponentFixture<TacheEffectueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacheEffectueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TacheEffectueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
