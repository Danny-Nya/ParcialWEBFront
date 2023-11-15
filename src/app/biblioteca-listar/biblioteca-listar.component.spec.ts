import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaListarComponent } from './biblioteca-listar.component';

describe('BibliotecaListarComponent', () => {
  let component: BibliotecaListarComponent;
  let fixture: ComponentFixture<BibliotecaListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BibliotecaListarComponent]
    });
    fixture = TestBed.createComponent(BibliotecaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
