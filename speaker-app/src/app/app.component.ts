import { Component } from '@angular/core';

import {SpeakerProfile} from "./speaker-profile";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  	speakerProfile: SpeakerProfile;

	constructor() {
		this.speakerProfile = new SpeakerProfile();
	}

	saveProfile(): void {
		console.log(this.speakerProfile);
	}

	ngOnInit() {
	}
}
