import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { IPokemon, Pokemon, PokemonResponse, PokeResponse } from 'src/app/models';
import { combineAll, concatMap, map, mergeAll, mergeMap, zipAll } from 'rxjs/operators'
import { combineLatest, from, merge, of } from 'rxjs';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  data: IPokemon[] = []

  columns = [
    'ID',
    'Nombre',
    'Altura',
    'Peso',
    'Tipo',
    'Minimo',
    'MovimientosAprendidos'
  ]

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {
    this.pokemonService.getAll()
      .pipe(
        map(res => res.results),
        map(pe => this.getMasivePokemon(pe)),
        mergeAll(),
        combineAll()
      ).subscribe(res => {
        console.log('res: ', res);
        this.data = res
      })
  }

  getMasivePokemon(dataRaw: PokemonResponse[]) {
    const pokemons$ = dataRaw.map(_ => {
      const regex = /\/[0-9]+\//
      const id = regex.exec(_.url)?.[0].replace('/','')
      return this.getPokemon(id as string)
    })
    return pokemons$
  }

  getPokemon = (id: string) => this.pokemonService.getPokemon(id)

}
