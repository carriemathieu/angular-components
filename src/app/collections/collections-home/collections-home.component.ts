import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    {name: 'James', age: 24, job: 'designer'},
    {name: 'Jill', age: 26, job: 'engineer'},
    {name: 'Elyse', age: 25, job: 'engineer'}
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
