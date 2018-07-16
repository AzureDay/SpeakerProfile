import { Component, OnInit, Input } from '@angular/core';

import {SpeakerSession} from "../speaker-profile";

@Component({
  selector: 'app-speaker-sessions',
  templateUrl: './speaker-sessions.component.html',
  styleUrls: ['./speaker-sessions.component.css']
})
export class SpeakerSessionsComponent implements OnInit {

	@Input() title: string;
	@Input() speakerSessions: SpeakerSession[];

  	constructor() { }

	ngOnInit() {
	}

}
