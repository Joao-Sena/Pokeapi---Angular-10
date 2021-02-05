import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListagemPokemonsService {

  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<any> {
    return this.http.get(`${environment.urlBasePokemons}?limit=32`);
  }

  getPokemonDetail(name: string): Observable<any> {
    return this.http.get(`${environment.urlBasePokemons}/${name}`);
  }

}
