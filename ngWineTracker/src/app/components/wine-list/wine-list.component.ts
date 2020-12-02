import { WineService } from './../../services/wine.service';
import { Component, OnInit } from '@angular/core';
import { Wine } from 'src/app/models/wine';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {
  title = 'Wine Tracker';

  wines: Wine[] = [];
  selected: Wine = null;
  newWine: Wine = new Wine();
  editWine: Wine = null;

  constructor(private wineService: WineService) { }

  ngOnInit(): void {
    this.reload();
  }
  reload(){
    this.wineService.index().subscribe(
      wines =>{
        this.wines = wines;
      },
      fail => {
        console.error("WineListComponent.reload(): error");
        console.error(fail);
      }
    )
  }
  getTodoCount(): number{
    return this.wines.length;
  }

  displayWine(wine: Wine): void{
    this.selected = wine;
  }

  setEditWine(): void{
    this.editWine = Object.assign({}, this.selected);
  }
  displayTable(): void{
    this.selected = null;
  }
  addWine(wine: Wine): void{
    this.wineService.create(wine).subscribe(
      create => {
        this.newWine = new Wine();
        this.reload();
        this.selected = create;
      },
      fail => {
        console.error('Failed in create');
        console.error(fail);
        console.error(wine);

      }
    );
  }
  updateWine(wine: Wine){
    this.wineService.update(wine).subscribe(
      update => {
        this.editWine = null;
        this.reload();
        this.selected = update;
      },
      fail => {
        console.error('Failed to update');
      }
    );
  }
  deleteWine(id: number){
    this.wineService.destroy(id).subscribe(
      deleted => {
        this.reload();
      },
      fail => {
        console.error('Failed to delete');
      }
    );
  }

}
