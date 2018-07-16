import { Component, OnInit, Input } from '@angular/core';

import {SpeakerTravel} from "../speaker-profile";

@Component({
  selector: 'app-speaker-travel',
  templateUrl: './speaker-travel.component.html',
  styleUrls: ['./speaker-travel.component.css']
})
export class SpeakerTravelComponent implements OnInit {

	@Input() speakerTravel: SpeakerTravel;

	constructor() { }

	ngOnInit() {
	}

}
