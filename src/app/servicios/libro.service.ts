import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../models/libro.interface';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LibroService {

  LibroURL = 'http://localhost:8080/Libro';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Libro[]> {
    return this.httpClient.get<Libro[]>(this.LibroURL +`/Lista`);
  }

  public detail(name: string): Observable<Libro> {
    return this.httpClient.get<Libro>(this.LibroURL +`/Buscar/${name}`);
  }

  public save(producto: string): Observable<any> {
    return this.httpClient.post<any>(this.LibroURL +`/Agregar`, producto);
  }

  public update(name: number, producto: Libro): Observable<any> {
    return this.httpClient.put<any>(this.LibroURL +`/Actualizar`, producto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.LibroURL +`/Borrar/${id}`);
  }
}