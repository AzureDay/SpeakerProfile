import { Injectable } from '@angular/core';

@Injectable({
  	providedIn: 'root'
})

export class AzureADConfiguration {
	clientID: string;
	authority: string;
	b2cScopes: string[];
	redirectUrl: string;

	constructor(clientId: string, authority: string, b2cScopes: string[], redirectUrl: string) {
		this.clientID = clientId;
		this.authority = authority;
		this.b2cScopes = b2cScopes;
		this.redirectUrl = redirectUrl;
	}
}

export class ConfigService {

	static AzureAD: AzureADConfiguration = new AzureADConfiguration(
		"5804c7d2-876f-49f4-9874-ebe2496fbfbb",
		"https://login.microsoftonline.com/tfp/AzureDayConference.onmicrosoft.com/B2C_1_SignUp_SignIn_Default",
		["https://AzureDayConference.onmicrosoft.com/user.read"],
		"http://localhost:4200"
	);

  	constructor() {
	}
}

