import { Component, OnInit } from '@angular/core';
import { Biblioteca } from '../models/biblioteca.interface';
import { BibliotecaService } from '../servicios/biblioteca.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-biblioteca-listar',
  templateUrl: './biblioteca-listar.component.html',
  styleUrls: ['./biblioteca-listar.component.css']
})
export class BibliotecaListarComponent implements OnInit {

  showInfoBibliotecaConTracks: boolean = true

  Bibliotecas: Biblioteca[] = [];
  constructor(private BibliotecaService: BibliotecaService, private router: Router) {

  }

  ngOnInit(): void {
    this.cargar();
  }
  cargar(): void {
    this.BibliotecaService.lista().subscribe(
      data => {
        this.Bibliotecas = data;
      },
      err => {
        console.log(err);
      }
    );
  };
}
