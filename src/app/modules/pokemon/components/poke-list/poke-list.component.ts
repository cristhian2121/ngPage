import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  data = [
    {
      Nombre: "Pikachu",
      ID: 1,
      Altura: "1.68",
      Peso: "25",
      Tipo: "Fuego",
      Minimo: "5",
      MovimientosAprendidos: "Atack trueno"
    },
    {
      Nombre: "Scuarto",
      ID: 1,
      Altura: "1.68",
      Peso: "25",
      Tipo: "Fuego",
      Minimo: "5",
      MovimientosAprendidos: "Atack trueno"
    },
    {
      Nombre: "Pikachu",
      ID: 1,
      Altura: "1.68",
      Peso: "25",
      Tipo: "Fuego",
      Minimo: "5",
      MovimientosAprendidos: "Atack trueno"
    }
  ]

  columns = [
    'ID',
    'Nombre',
    'Altura',
    'Peso',
    'Tipo',
    'Minimo',
    'MovimientosAprendidos'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
