import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroListarComponent } from './libro-listar/libro-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibroService } from './servicios/libro.service';
import { BibliotecaService } from './servicios/biblioteca.service';
import { BibliotecaListarComponent } from './biblioteca-listar/biblioteca-listar.component';
import { BibliotecaCrearComponent } from './biblioteca-crear/biblioteca-crear.component';
import { LibroCrearComponent } from './libro-crear/libro-crear.component';
import { MenuComponent } from './menu/menu.component';
@NgModule({
  declarations: [
    AppComponent,
    LibroListarComponent,
    BibliotecaListarComponent,
    BibliotecaCrearComponent,
    LibroCrearComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LibroService,
    BibliotecaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
