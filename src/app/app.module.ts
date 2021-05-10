import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AuthService } from './auth/auth.service';
import { TrainingService } from './training/training.service';
import { environment } from '../environments/environment';
import { UIService } from './shared/ui.service';
import { AuthModule } from './auth/auth.module';
import { reducers } from './app.reducer';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { YoutubevideosComponent } from './youtubevideos/youtubevideos.component';
import { WorkoutComponent } from './workout/workout.component';
import { SearchchannelsComponent } from './searchchannels/searchchannels.component';
import { MaterialElevationDirective } from './workout/material-elevation.directive';
import { ContactComponent } from './contact/contact.component';
import { HttpModule, JsonpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    YoutubevideosComponent,
    WorkoutComponent,
    SearchchannelsComponent,
    MaterialElevationDirective,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AuthModule,
    HttpClientModule,
    NgxSpinnerModule,
    AngularFirestoreModule,
    StoreModule.forRoot(reducers),
    MatCarouselModule.forRoot()
  ],
  providers: [AuthService, TrainingService, UIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
