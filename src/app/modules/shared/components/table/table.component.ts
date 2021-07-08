import { Component, Input, OnInit } from '@angular/core';
import { IPokemon, Pokemon } from 'src/app/models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() title = '';
  @Input() items: Array<IPokemon> = [];
  @Input() columns: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
