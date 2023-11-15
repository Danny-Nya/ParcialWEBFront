import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaCrearComponent } from './biblioteca-crear.component';

describe('BibliotecaCrearComponent', () => {
  let component: BibliotecaCrearComponent;
  let fixture: ComponentFixture<BibliotecaCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BibliotecaCrearComponent]
    });
    fixture = TestBed.createComponent(BibliotecaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
