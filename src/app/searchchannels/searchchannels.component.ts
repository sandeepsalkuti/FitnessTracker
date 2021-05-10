import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { YoutubeService } from '../youtubevideos/youtube.service';

@Component({
  selector: 'app-searchchannels',
  templateUrl: './searchchannels.component.html',
  styleUrls: ['./searchchannels.component.scss']
})
export class SearchchannelsComponent implements OnInit {

  @ViewChild('channelName') channelName:ElementRef;
  channels:any

  constructor(private youtube:YoutubeService) { }

  ngOnInit() {(
    this.youtube.getChannel("workouts").subscribe((data) =>{
      this.channels = data.items
    }))
  }
getData(){
  const channelName = this.channelName.nativeElement.value
  this.youtube.getChannel(channelName).subscribe((data) =>{
    this.channels = data.items
  })
}

}
