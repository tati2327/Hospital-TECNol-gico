import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPersonalComponent } from './crear-personal.component';

describe('CrearPersonalComponent', () => {
  let component: CrearPersonalComponent;
  let fixture: ComponentFixture<CrearPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
