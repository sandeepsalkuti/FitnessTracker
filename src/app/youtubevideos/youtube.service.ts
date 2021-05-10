import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  //apiKey : string = 'AIzaSyDlQGyzrnECYCf0ZNgtY903PSXGHSt5NS4';

  apiKey : string = 'AIzaSyDbgAQee9hyYPZr8o_224KK6K-ziO_neKM';


  constructor(public http: HttpClient) { }

  getVideosForChanel(channel, maxResults): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&q=' + channel + '&order=viewCount&part=snippet &type=video,id&maxResults=' + maxResults
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }

  getChannel(channelName): Observable<any> {
    let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+ channelName+'&type=channel&key=' + this.apiKey + '&maxResults=24'
    return this.http.get(<any>url)
      .pipe(map((res) => {
        return res;
      }))
  }

  getVideos(channel, maxResults): Observable<any> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&q=' + channel + '&order=viewCount&part=snippet &type=video,id&maxResults=' + maxResults
    return this.http.get(<any>url)
      .pipe(map((res) => {
        return res;
      }))
  }
}
