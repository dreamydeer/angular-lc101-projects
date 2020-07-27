import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks: string[] = ["https://www.youtube.com/watch?v=47yuiPK01kg", "https://frith-inle.tumblr.com/"]
  constructor() { }

  ngOnInit() {
  }

}
