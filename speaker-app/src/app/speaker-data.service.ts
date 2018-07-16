import { Injectable } from '@angular/core';

import {SpeakerProfile} from "./speaker-profile";

@Injectable({
  providedIn: 'root'
})

export class SpeakerDataService {
	static createSpeakerProfile(): void {

	};

	static loadSpeakerProfile(): SpeakerProfile {
		return new SpeakerProfile();
	}

	static saveSpeakerProfile(profile: SpeakerProfile): void {

	}

  	constructor() { }
}
