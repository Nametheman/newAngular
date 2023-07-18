import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.changeInputVal();
  }

  @Input('total') all: number = 0;
  @Input() common: number = 0;
  @Input() rare: number = 0;

  selectedRadioBtnVal: string = 'all';

  @Output() radioInputChanged: EventEmitter<string> =
    new EventEmitter<string>();

  changeInputVal() {
    this.radioInputChanged.emit(this.selectedRadioBtnVal);
  }
}
