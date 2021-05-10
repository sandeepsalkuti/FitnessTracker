import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { YoutubeService } from './youtube.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-youtubevideos',
  templateUrl: './youtubevideos.component.html',
  styleUrls: ['./youtubevideos.component.scss']
})
export class YoutubevideosComponent implements OnInit {

  @ViewChild('videoName') videoName:ElementRef;
  videos:any




  // videos: any[];
  private unsubscribe$: Subject<any> = new Subject();

  constructor(private spinner: NgxSpinnerService, private youTubeService: YoutubeService) { }


  ngOnInit() {
    this.spinner.show()
    setTimeout(()=>
    {
      this.spinner.hide()
    },3000)
    this.videos = [];
    this.youTubeService
      .getVideosForChanel('aerobics|gymnastics', 10)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos.push(element)
          console.log(element)
        }

      });
  }

  // ngOnInit() {
  //   this.spinner.show()
  //   setTimeout(()=>
  //   {
  //     this.spinner.hide()
  //   },3000)
  // }
  // getVideo(){
  //   let video=''
  //   const videoName = this.videoName.nativeElement.value
  //   this.youTubeService.getVideos(videoName,12).subscribe((data) =>{
  //     data.items.forEach(item=>{
  //       video = `<iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>`

  //       this.videos.push(video);
  //     })
  //   })
  // }

  }







