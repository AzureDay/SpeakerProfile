export class SpeakerProfile {
	id: string;
	info: SpeakerInfo;
	sessions: SpeakerSession[];
	workshops: SpeakerSession[];
	notes: SpeakerNotes;
	travel: SpeakerTravel;
	social: SpeakerSocial[];

	constructor() {
		this.info = new SpeakerInfo();
		this.sessions = [];
		this.workshops = [];
		this.notes = new SpeakerNotes();
		this.travel = new SpeakerTravel();
		this.social = [];
	}
}

export class SpeakerInfo {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	country: string;
	city: string;
	company: string;
	jobTitle: string;
	bio: string;
	photo: string;
}

export class SpeakerSocial {
	link: string;
}

export class SpeakerSession {
	title: string;
	abstract: string;
	language: string;
	level: string;
}

export class SpeakerNotes {
	notes: string;
}

export class SpeakerTravel {

}
