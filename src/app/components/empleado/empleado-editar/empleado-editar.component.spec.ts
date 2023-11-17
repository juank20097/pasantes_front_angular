import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoEditarComponent } from './empleado-editar.component';

describe('EmpleadoEditarComponent', () => {
  let component: EmpleadoEditarComponent;
  let fixture: ComponentFixture<EmpleadoEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadoEditarComponent]
    });
    fixture = TestBed.createComponent(EmpleadoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
