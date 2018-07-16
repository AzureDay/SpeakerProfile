import { Component } from '@angular/core';

import {SpeakerProfile} from "./speaker-profile";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  	title = 'Speaker Profile';

  	speakerProfile: SpeakerProfile;

	constructor() {
		this.speakerProfile = new SpeakerProfile();
	}

	ngOnInit() {
	}
}
