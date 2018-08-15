import { Component } from '@angular/core';

import { SpeakerProfile } from "./speaker-profile";
import { AuthenticationService } from "./authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  	public speakerProfile: SpeakerProfile;

	constructor(private auth: AuthenticationService) {
		this.speakerProfile = new SpeakerProfile();
	}

	public isAuthenticated() {
		this.auth.checkAuthentication();
		return this.auth.isAuthenticated;
	}

	public login() {
		this.auth.login();
	}

	public logout() {
		this.auth.logout();
	}

	saveProfile(): void {
		console.log(this.speakerProfile);
	}

	loadProfile(): void {
	}

	ngOnInit() {
		if (this.isAuthenticated()) {
			this.auth.loadGraphProfile();
		}
	}
}
