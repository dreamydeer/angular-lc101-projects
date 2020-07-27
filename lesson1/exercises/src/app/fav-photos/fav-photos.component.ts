import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Movie Covers';
  image1 = 'https://images-na.ssl-images-amazon.com/images/I/51eVf8M3-GL._AC_.jpg';
  image2 = 'https://images-na.ssl-images-amazon.com/images/I/51Fpj2QK7NL._AC_.jpg';
  image3 = 'https://vignette.wikia.nocookie.net/wolf-children-series/images/7/73/Wolf_Children_-_2012_-_tt2140203_-_Poster.jpg/revision/latest/scale-to-width-down/340?cb=20161128042953';

  constructor() { }

  ngOnInit() {
  }

}