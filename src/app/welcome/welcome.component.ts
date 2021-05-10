import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import {AuthService} from '../auth/auth.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  authDataVal: any;

  slides = [{'image': 'https://cdn.wallpapersafari.com/96/45/MKoFqY.gif'}, {'image': './assets/2.jpg'},{'image': 'https://cdn.wallpapersafari.com/30/61/x7Fz0I.jpg'}, {'image': './assets/4.jpg'}, {'image': './assets/y.jpg'}];

  constructor(public authService: AuthService) { }
//   Data(){
//  this.authDataVal = this.authService.userData;
//  console.log(this.authDataVal);
//   }
  ngOnInit() {
    // this.authDataVal = this.authService.userData;

  }



}
