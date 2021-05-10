import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  namedata: string;
  emaildata:string;
  phonedata:number;
  messagedata:string;

  submitted = false;
  error: {};

  constructor( private router: Router,private http: HttpClient) { }

  ngOnInit() {
  }
  onSubmit(data) {
    this.submitted = true;
    this.http.post('https://formspree.io/f/salkutisandeep222@gmail.com',data).subscribe((result)=> console.log(result));
    // this.http.post('http:/localhost:4200/contactdata',data).subscribe((result)=>console.log(result));

  }

  gotoHome() {
    this.router.navigate(['/']);
  }

}
