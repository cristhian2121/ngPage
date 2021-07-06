import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { PokeCompareComponent } from './components/poke-compare/poke-compare.component';
import { SharedModule } from '@modules/shared/shared.module';
import { PokemonRoutingModule } from './pokemon.routing';



@NgModule({
  declarations: [
    PokeListComponent,
    PokeDetailComponent,
    PokeCompareComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    SharedModule
  ]
})
export class PokemonModule { }
