import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { WelcomeComponent } from './welcome/welcome.component';
import { YoutubevideosComponent } from './youtubevideos/youtubevideos.component';
import { WorkoutComponent } from './workout/workout.component';
import { SearchchannelsComponent } from './searchchannels/searchchannels.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'videos', component: YoutubevideosComponent },
  { path: 'workout', component: WorkoutComponent },
  { path: 'search', component: SearchchannelsComponent },
  { path: 'contact', component: ContactComponent },
  // canLoad can be used only for LazyLoaded Modules
  // https://www.concretepage.com/angular/angular-canload-guard-example#CanActivate
  { path: 'training', loadChildren: './training/training.module#TrainingModule', canLoad: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
