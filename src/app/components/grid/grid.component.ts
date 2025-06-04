import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {

  @Input() items: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  isSelected = false;

  toggleSelection() {
  this.isSelected = !this.isSelected;
}

}
