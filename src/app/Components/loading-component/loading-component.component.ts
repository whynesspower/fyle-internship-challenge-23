import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-component',
  templateUrl: './loading-component.component.html',
  styleUrls: ['./loading-component.component.css'],
})
export class LoadingComponentComponent implements OnInit {
  repo = [1, 2, 3, 4];
  constructor() {}

  ngOnInit(): void {}
}
