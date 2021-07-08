import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IPokemon, PokeResponse } from "src/app/models";

import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  /**
   *
   */
  constructor(
    private http: HttpClient
  ) {  }

  getAll(params?: string) {
    return this.http.get<PokeResponse>(`${environment.POKE_API}/ability`)
  }

  getPokemon(params?: string) {
    return this.http.get<IPokemon>(`${environment.POKE_API}/pokemon/${params}`)
  }

}
