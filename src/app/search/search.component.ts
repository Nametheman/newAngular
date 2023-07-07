import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchVal: string;
  constructor(private dataService: DataService) {
    this.searchVal = dataService.searchVal;
  }
  ngOnInit(): void {}

  searchValue: string = '';
  changeSearchVal(e: Event) {
    // console.log((<HTMLInputElement>e.target).value);
    this.searchValue = (<HTMLInputElement>e.target).value;
  }
}
