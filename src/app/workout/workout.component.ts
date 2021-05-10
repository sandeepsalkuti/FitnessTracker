import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

  defaultElevation = 2;
  raisedElevation = 8;

  workouts = [{
    title: 'CARDIO',
    image: '../assets/cardio.mp4',
    // image:'https://thumbs.gfycat.com/DigitalTangibleArgentinehornedfrog-mobile.mp4',
    // image: 'https://www.mensjournal.com/wp-content/uploads/mf/cardio-builds-muscle-main_0.jpg?w=1188&h=630&crop=1&quality=86&strip=all',
    content: 'Cardio exercise is rhythmic activity that raises your heart rate into your target heart rate zone.This is the zone where you burn the most fat and calories. Some of the most common examples of cardio include walking, cycling, and swimming.'
  },
  {
    title: 'YOGA',
    image: '../assets/yoga.mp4',
    // image: 'https://thumbs.gfycat.com/GrippingSlowHarvestmen-mobile.mp4',
    // image: 'https://mindbodygreen-res.cloudinary.com/image/upload/c_crop,x_0,y_182,w_1733,h_973/c_fill,w_800,h_400,g_auto,q_85,fl_lossy,f_jpg/org/7xfl56o82k70oy7ca.jpg',
    content: ' Yoga is an ancient form of exercise that focuses on strength, flexibility and breathing to boost physical and mental wellbeing.The main components of yoga are postures (a series of movements designed to increase strength and flexibility) and breathing.'
  },
  {
    title: 'WEIGHTS',
    image: '../assets/weights.mp4',
    // image:'https://thumbs.gfycat.com/AgileSentimentalEft-mobile.mp4',
    // image: 'https://cdn.shopify.com/s/files/1/0332/6297/files/Custom-Weights-2019.jpg?v=1577113261',
    content: 'Weights training involves using some type of resistance to do a variety of exercises designed to challenge all your muscle groups,including your chest, back, shoulder, biceps, triceps, core, legs (quadriceps, hamstrings, calves) and glutes.'
  },
  {
    title: 'PUSH-UPS',
    image: '../assets/pushups.mp4',
    // image:'https://thumbs.gfycat.com/AdolescentBeautifulFattaileddunnart-mobile.mp4',
    // image: 'https://cdn.mos.cms.futurecdn.net/oYDbf5hQAePHEBNZTQMXRA.jpg',
    content: 'A pushup uses your own body weight as resistance, working your upper body and core at the same time. In the standard pushup,the following muscles are targeted: chest muscles, or pectorals. shoulders, or deltoids.'
  },
  {
    title: 'PILATES',
    image: '../assets/pilates.mp4',
    // image:'https://thumbs.gfycat.com/FalseEvenEthiopianwolf-mobile.mp4',
    // image: 'https://cdn.newsapi.com.au/image/v1/8b4d16034d5062be0526c892ce0d133f',
    content: 'Pilates is a method of exercise that consists of low-impact flexibility and muscular strength and endurance movements. Pilates emphasizes proper postural alignment'
  },
  {
    title: 'STRETCHING',
    image: '../assets/stretching.mp4',
    // image:'https://thumbs.gfycat.com/AdorableIcyAracari-mobile.mp4',
    // image: 'https://health.wayne.edu/wp-content/uploads/2019/10/stretching-to-relieve-stress--e1569940496486.jpg',
    content: 'Stretching is a form of physical exercise in which a specific muscle or tendon (or muscle group) is deliberately flexed or stretched in order to improve the muscle \'s felt elasticity and achieve comfortable muscle tone.'
  },
  {
    title: 'LUNGE',
    image: '../assets/lunge.mp4',
    // image:'https://media.istockphoto.com/videos/unrecognizable-woman-doing-jump-lunges-at-home-video-id819303192',
    // image: 'https://media.istockphoto.com/videos/unrecognizable-woman-doing-jump-lunges-at-home-video-id819303192',
    content: 'A lunge can refer to any position of the human body where one leg is positioned forward with knee bent and foot flat on the ground while the other leg is positioned behind.'
  },
  {
    title: 'SQUAT',
    image: '../assets/squat.mp4',
    // image:'https://thumbs.gfycat.com/AdorableIcyAracari-mobile.mp4',
    // image: 'https://www.mensjournal.com/wp-content/uploads/mf/cardio-builds-muscle-main_0.jpg?w=1188&h=630&crop=1&quality=86&strip=all',
    content: 'A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up. During the descent of a squat, the hip and knee joints flex.'
  },
  {
    title: 'AEROBICS',
    image: '../assets/aerobics.mp4',
    // image:'https://thumbs.gfycat.com/VeneratedEnchantingGuineafowl-mobile.mp4',
    // image: 'https://i.ytimg.com/vi/K5li7rDDxpY/maxresdefault.jpg',
    content: 'Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines with the goal of improving all elements of fitness.'
  }
]

  constructor(private router:Router) { }

  navigate(){
    //do your any operations
    // this.router.navigate(['path']);
    //also you can pass like this,
     this.router.navigateByUrl('https://darebee.com/');
    }

  ngOnInit() {
  }


}
