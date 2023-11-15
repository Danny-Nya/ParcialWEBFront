import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Biblioteca } from '../models/biblioteca.interface';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  BibliotecaURL = 'http://localhost:8080/Biblioteca';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Biblioteca[]> {
    return this.httpClient.get<Biblioteca[]>(this.BibliotecaURL +`/Lista`);
  }

  public detail(name: string): Observable<Biblioteca> {
    return this.httpClient.get<Biblioteca>(this.BibliotecaURL +`/Buscar/${name}`);
  }

  public save(producto: string): Observable<any> {
    return this.httpClient.post<any>(this.BibliotecaURL +`/Agregar`, producto);
  }

  public update(name: number, producto: Biblioteca): Observable<any> {
    return this.httpClient.put<any>(this.BibliotecaURL +`/Actualizar`, producto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.BibliotecaURL +`/Borrar/${id}`);
  }
}