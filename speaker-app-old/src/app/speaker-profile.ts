export class SpeakerProfile {
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

	constructor() {
		this.level = "Beginner";
	}

	getLevelDefinition(): string {
		switch (this.level) {
			case "Beginner":
				return "Assumes little or no expertise with topic and covers topic concepts, functions, features, and benefits. Provides specific details about the topic.";
			case "Advanced":
				return "Assumes in-depth understanding of features in a real-world environment, and strong coding skills. Provides a detailed technical overview of a subset of product/technology features, covering architecture, performance, migration, deployment, and development.";
			case "Expert":
				return "Expert material. Assumes a deep level of technical knowledge and experience and a detailed, thorough understanding of topic. Provides expert-to-expert interaction and coverage of specialized topics.";
			default:
				return "";
		}
	}
}

export class SpeakerNotes {
	notes: string;
}

export class SpeakerTravel {
	travel: string;
	arrivalAt: string;
	arrivalInfo: string;
	departureAt: string;
	departureInfo: string;
	accommodation: string;

	constructor() {
		this.travel = "none";
		this.accommodation = "none";
	}
}
