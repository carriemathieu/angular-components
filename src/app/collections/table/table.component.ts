import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  // to modify semantic ui class names/styling for table
  @Input() classNames = '';

  @Input() data: any = [];
  @Input() headers: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
