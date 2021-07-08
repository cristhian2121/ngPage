
export interface PokemonResponse {
  name: string;
  url: string;
}

export interface PokeResponse {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonResponse[]
}

export interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: IPokeType[];
  moves: Move[],
  base_experience: number
}

export interface IPokeType {
  slot: number;
  type: Type;
}

interface Move {
  move: Type;
  version_group_details: any[];

}

interface Type {
  name: string;
  url: string;
}
