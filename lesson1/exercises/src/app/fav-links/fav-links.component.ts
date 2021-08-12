import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks: string[] = ['https://www.deviantart.com/', 'https://www.warframe.com/game/questguide', 'https://www.pinterest.com/'];
  constructor() { }

  ngOnInit() {
  }

}
