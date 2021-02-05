import { TestBed } from '@angular/core/testing';

import { ListagemPokemonsService } from './listagem-pokemons.service';

describe('ListagemPokemonsService', () => {
  let service: ListagemPokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListagemPokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
