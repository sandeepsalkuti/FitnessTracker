import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  slides = [{'image': 'https://cdn.wallpapersafari.com/96/45/MKoFqY.gif'}, {'image': 'https://wallpaperaccess.com/full/1108003.jpg'},{'image': 'https://cdn.wallpapersafari.com/30/61/x7Fz0I.jpg'}, {'image': 'http://trumpwallpapers.com/wp-content/uploads/Workout-Wallpaper-46-1920-x-1080.jpg'}, {'image': './assets/y.jpg'}];

  constructor() { }

  ngOnInit() {
  }

}
