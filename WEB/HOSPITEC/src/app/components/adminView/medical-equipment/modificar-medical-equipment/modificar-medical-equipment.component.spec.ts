import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarMedicalEquipmentComponent } from './modificar-medical-equipment.component';

describe('ModificarMedicalEquipmentComponent', () => {
  let component: ModificarMedicalEquipmentComponent;
  let fixture: ComponentFixture<ModificarMedicalEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarMedicalEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarMedicalEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
