import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro.interface';
import { LibroService } from '../servicios/libro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-libro-crear',
  templateUrl: './libro-crear.component.html',
  styleUrls: ['./libro-crear.component.css']
})
export class LibroCrearComponent implements OnInit {

  libroForm: FormGroup;

  constructor(
    private LibroService:LibroService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder){
      this.libroForm = this.formBuilder.group({
        nombre: ['',Validators.required],
        autor: ['',Validators.required],
        biblioteca: ['',Validators.required]
      });
    }

  ngOnInit() {

  }
  onSubmit(){

    if (this.libroForm.valid) {
      const albumData = this.libroForm.value;
      console.log(albumData)
      this.LibroService.save(albumData).subscribe(
        (response) => {
          console.log('se agrego libro')
          window.location.reload();
        },
        (error) => {
        console.error('error fetching data')
        }
      );
    }
  }
}