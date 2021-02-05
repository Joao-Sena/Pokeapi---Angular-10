import { Component, OnInit } from '@angular/core';
import { ListagemPokemonsService } from 'src/app/services/listagem-pokemons.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemons: any = [];
  backupPokemons: any = [];
  pokemonDetalhes: any;
  // Paginação
  page = 1;
  pageSize = 4;

  constructor(private service: ListagemPokemonsService) { }

  ngOnInit(): void {
    this.getPokemonsList();
  }

  getPokemonsList(): void {

    this.service.getAllPokemons().pipe(take(1))
    .subscribe(
      (response: any) => {

        response.results.forEach(pokemon => {
          this.service.getPokemonDetail(pokemon.name).pipe(take(1))
          .subscribe(
            (responseDetail: any) => {

              this.pokemons.push(responseDetail);

            }
          );
        });

        this.backupPokemons = this.pokemons;

      },
      (erro: any) => {
        console.error(erro);
        this.pokemons = false;
      }
    );
  }

  limpaFiltro(): void { this.pokemons = this.backupPokemons; }

  filterByType(tipo: string): void {

    this.pokemons = this.backupPokemons;
    this.page = 1;

    const pokemonsFiltrados = this.pokemons.filter((pokemon: any) => {
      return pokemon.types[0].type.name === tipo;
    });

    this.pokemons = pokemonsFiltrados;

  }

  setPokemonDetail(detalhePokemon: any): void {
    this.pokemonDetalhes = detalhePokemon;
  }

}
