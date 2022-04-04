import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count-display-component',
  templateUrl: './count-display-component.component.html',
  styleUrls: ['./count-display-component.component.css']
})
export class CountDisplayComponentComponent implements OnInit {
@Input()
  count: number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
