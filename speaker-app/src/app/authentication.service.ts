import { Injectable } from '@angular/core';

import { UserAgentApplication } from 'msal';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

	private applicationConfig: any = {
		clientID: '5804c7d2-876f-49f4-9874-ebe2496fbfbb',
		authority: 'https://login.microsoftonline.com/tfp/AzureDayConference.onmicrosoft.com/B2C_1_SignUp_SignIn_Default',
		b2cScopes: ['https://AzureDayConference.onmicrosoft.com/user.read'],
		redirectUrl: 'http://localhost:4200'
	};

	private app: any;
	public isAuthenticated: boolean = false;

	constructor() {
		this.app = new UserAgentApplication(this.applicationConfig.clientID, this.applicationConfig.authority,
			(errorDesc, token, error, tokenType) => {
				this.isAuthenticated = true;
			}, { redirectUri: this.applicationConfig.redirectUrl });
		this.app.redirectUri = this.applicationConfig.redirectUrl;
	}

	private getToken(): string {
		return window.sessionStorage.getItem('msal.idtoken');
	}

	public checkAuthentication() {
		let token = this.getToken();
		if (token) {
			this.isAuthenticated = true;
		}
	}

	public login() {
		this.checkAuthentication();
		if (!this.isAuthenticated) {
			let tokenData = '';
			this.app.loginRedirect(this.applicationConfig.b2cScopes)
				.then(data => { tokenData = data; });
		}
	}

	public logout() {
		this.app.logout();
	}

}
