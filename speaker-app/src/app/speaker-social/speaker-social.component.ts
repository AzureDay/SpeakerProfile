import { Component, OnInit, Input } from '@angular/core';

import { SpeakerSocial } from "../speaker-profile";

@Component({
  selector: 'app-speaker-social',
  templateUrl: './speaker-social.component.html',
  styleUrls: ['./speaker-social.component.css']
})

export class SpeakerSocialComponent implements OnInit {

	@Input() title: string;

	@Input() speakerSocial: SpeakerSocial[];

	constructor() { }

	addSocial(): void {
		this.speakerSocial.push(new SpeakerSocial());
	}

	ngOnInit() {
	}

}
