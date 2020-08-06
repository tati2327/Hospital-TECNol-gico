import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarCamaComponent } from './modificar-cama.component';

describe('ModificarCamaComponent', () => {
  let component: ModificarCamaComponent;
  let fixture: ComponentFixture<ModificarCamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarCamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarCamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
