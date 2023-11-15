import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroListarComponent } from './libro-listar/libro-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibroService } from './servicios/libro.service';
import { BibliotecaService } from './servicios/biblioteca.service';

@NgModule({
  declarations: [
    AppComponent,
    LibroListarComponent
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
