import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  slides = [{'image': './assets/welcome11.jpg'}, {'image': 'https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/Galleries/30+Motivational/Your-Body.jpg'},{'image': 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/62812139/original/8e74cd6fac88017d77dfb97f2729ea9196165ac3/give-50-motivational-fitness-quotes-pictures.jpg'}, {'image': 'http://trumpwallpapers.com/wp-content/uploads/Workout-Wallpaper-46-1920-x-1080.jpg'}, {'image': 'http://trumpwallpapers.com/wp-content/uploads/Workout-Wallpaper-19-1920-x-1080.jpg'}];

  constructor() { }

  ngOnInit() {
  }

}
