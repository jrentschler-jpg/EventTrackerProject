import { WineService } from './../../services/wine.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {
  title = 'Wine Tracker';

  constructor(private wineService: WineService) { }

  ngOnInit(): void {
  }

}
