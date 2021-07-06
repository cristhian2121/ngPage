import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() title: string = '';
  @Input() items: Array<any> = [];
  @Input() columns: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    console.log('***');
    console.log('items: ', this.items);
  }

}
