import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatInputModule, MatCardModule } from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SpeakerInfoComponent } from './speaker-info/speaker-info.component';
import { SpeakerSessionsComponent } from './speaker-sessions/speaker-sessions.component';
import { SpeakerTravelComponent } from './speaker-travel/speaker-travel.component';
import { SpeakerNotesComponent } from './speaker-notes/speaker-notes.component';

@NgModule({
	declarations: [
		AppComponent,
		SpeakerInfoComponent,
		SpeakerSessionsComponent,
		SpeakerTravelComponent,
		SpeakerNotesComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatCardModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
