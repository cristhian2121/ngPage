import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { PokeListComponent } from './components/poke-list/poke-list.component';

const routes: Routes = [
  {
    path: '',
    component: PokeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
