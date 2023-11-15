import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro.interface';
import { LibroService } from '../servicios/libro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libro-listar',
  templateUrl: './libro-listar.component.html',
  styleUrls: ['./libro-listar.component.css']
})
export class LibroListarComponent implements OnInit {

  showInfoLibroConTracks: boolean = true

  Libros: Libro[] = [];
  constructor(private LibroService: LibroService, private router: Router) {

  }

  ngOnInit(): void {
    this.cargar();
  }
  //Vuelve el colorscheme transparente
  generateGradient(color: string): string {
    return `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 1)`;
  }
  cargar(): void {
    this.LibroService.lista().subscribe(
      data => {
        this.Libros = data;
      },
      err => {
        console.log(err);
      }
    );
  };
}
