import { Component, OnInit, Input } from '@angular/core';

import { SpeakerNotes } from "../speaker-profile";

@Component({
  selector: 'app-speaker-notes',
  templateUrl: './speaker-notes.component.html',
  styleUrls: ['./speaker-notes.component.css']
})
export class SpeakerNotesComponent implements OnInit {

	@Input() title: string;

	@Input() speakerNotes: SpeakerNotes;

	constructor() { }

	ngOnInit() {
	}
}
