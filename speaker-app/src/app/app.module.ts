import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ConferencesComponent } from './pages/conferences/conferences.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { ErrorComponent } from './pages/error/error.component';

import { SpeakerInfoComponent } from './forms/speaker-info/speaker-info.component';
import { SpeakerNotesComponent } from './forms/speaker-notes/speaker-notes.component';
import { SpeakerSocialComponent } from './forms/speaker-social/speaker-social.component';
import { SpeakerTravelComponent } from './forms/speaker-travel/speaker-travel.component';
import { SpeakerSessionsComponent } from './forms/speaker-sessions/speaker-sessions.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },

  { path: 'profile', component: ProfileComponent },
  { path: 'conferences', component: ConferencesComponent },

  { path: 'callback', component: CallbackComponent },

  { path: '',
    redirectTo: '/conferences',
    pathMatch: 'full'
  },

  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    ProfileComponent,
    ErrorComponent,
    ConferencesComponent,
    SpeakerInfoComponent,
    SpeakerNotesComponent,
    SpeakerSocialComponent,
    SpeakerTravelComponent,
    SpeakerSessionsComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
