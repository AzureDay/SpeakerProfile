import { Component, OnInit, Input } from '@angular/core';

import { SpeakerInfo } from "../speaker-profile";

@Component({
  selector: 'app-speaker-info',
  templateUrl: './speaker-info.component.html',
  styleUrls: ['./speaker-info.component.css']
})
export class SpeakerInfoComponent implements OnInit {

	@Input() title: string;

	@Input() speakerInfo: SpeakerInfo;

  	constructor() { }

	ngOnInit() {
	}

}
