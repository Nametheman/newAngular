import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchVal: string = '';
  constructor(private dataService: DataService) {
    this.searchVal = dataService.searchVal;
  }
  ngOnInit(): void {}
  slogan: string = `Bring the idea: ${this.searchVal}`;
  heroImg: string = 'assets/Images/polar.jpeg';
}
