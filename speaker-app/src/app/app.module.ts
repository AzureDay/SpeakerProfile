import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatDividerModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

import { MsalModule, MsalInterceptor } from "@azure/msal-angular";

import { AppComponent } from './app.component';
import { SpeakerInfoComponent } from './speaker-info/speaker-info.component';
import { SpeakerSessionsComponent } from './speaker-sessions/speaker-sessions.component';
import { SpeakerTravelComponent } from './speaker-travel/speaker-travel.component';
import { SpeakerNotesComponent } from './speaker-notes/speaker-notes.component';
import { SpeakerSocialComponent } from './speaker-social/speaker-social.component';

import { ConfigService } from "./config.service";
import { appRoutes } from './app.routes';

@NgModule({
	declarations: [
		AppComponent,
		SpeakerInfoComponent,
		SpeakerSessionsComponent,
		SpeakerTravelComponent,
		SpeakerNotesComponent,
		SpeakerSocialComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatCardModule,
		MatButtonModule,
		MatToolbarModule,
		MatDividerModule,
		MatSelectModule,
		MatDatepickerModule,
		MatNativeDateModule,
		RouterModule.forRoot(appRoutes),
		MsalModule.forRoot({
			clientID: ConfigService.AzureAD.clientID,
			authority: ConfigService.AzureAD.authority,
			redirectUri: ConfigService.AzureAD.redirectUrl,
			consentScopes: ConfigService.AzureAD.b2cScopes
		})
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: MsalInterceptor,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
