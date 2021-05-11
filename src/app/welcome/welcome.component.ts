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

  features=[{
    title: 'Purpose of Fitness App',
    image: 'https://images.everydayhealth.com/images/healthy-living/fitness/fitness-guide-fitness-and-sleep-722x406.jpg',
    content:'The fitness app provides a dashboard, which contains the details about the total workouts,videos,frequency of workout, average workouts duration etc.'
  },
  {
    title: 'Key Features',
    image: 'https://www.mobindustry.net/wp-content/uploads/the-best-fitness-apps-for-2020_udyp.jpg',
    content:'Easy to Use Workout videos, Workout Timer, Exercise Database, Workout planner with pre-built routines, fetching youtube channels and videos'
  },
  {
    title: 'Powerful Dashboard ',
    image: 'https://gccontent.blob.core.windows.net/gccontent/blogs/legacy/xuni/2016/09/FEMontage.png',
    content:'The fitness app is a very good workout app, exercise planner, and fitness tracker. Workout schedule that works for most daily routines. '
  },
  {
    title: 'Exercise Module',
    image: 'http://images.macrumors.com/article-new/2017/09/streaksworkoutapp-800x469.jpg',
    content:'The core Features of the exercise module include creating exercises including all parameters, and clone existing exercises to reduce data entry.'
  },
  {
    title: 'Customizable Workouts',
    image: 'https://cdn57.androidauthority.net/wp-content/uploads/2019/02/JEFIT-Workout-Tracker-screenshot-2019-840x473.jpg',
    content:'The fitness app is a very good workout app, exercise planner, and fitness tracker. It features a customizable workout schedule.'
  },
  {
    title: 'Easy to use platform',
    image: 'https://www.unifiedinfotech.net/blog/wp-content/uploads/2019/06/health-and-fitness-tracking-app-development.jpg',
    content:'The app is very easy to use as it possesses very simple functionality navigation and can be managed by any general person. This is hosted on firebase and can be accessed anyone with internet.'
  },
]

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
