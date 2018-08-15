import { Injectable } from '@angular/core';

import {SpeakerProfile} from "./speaker-profile";

@Injectable({
  providedIn: 'root'
})

export class SpeakerDataService {
	static createSpeakerProfile(): void {
		this.saveSpeakerProfile(new SpeakerProfile());
	};

	static loadSpeakerProfile(): SpeakerProfile {
		let profile = localStorage.getItem("AzureDaySpeakerProfile");
		return profile ?
			JSON.parse(profile) :
			new SpeakerProfile();
	}

	static saveSpeakerProfile(profile: SpeakerProfile): void {
		localStorage.setItem("AzureDaySpeakerProfile", JSON.stringify(profile));
	}

  	constructor() { }
}
