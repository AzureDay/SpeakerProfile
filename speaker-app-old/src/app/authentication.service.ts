import { Injectable } from '@angular/core';

import { UserAgentApplication } from 'msal';

import { ConfigService } from "./config.service";

@Injectable({
  	providedIn: 'root'
})

export class AuthenticationService {

	private app: UserAgentApplication;
	public isAuthenticated: boolean = false;

	constructor() {
		this.app = new UserAgentApplication(ConfigService.AzureAD.clientID, ConfigService.AzureAD.authority,
			(errorDesc, token, error, tokenType) => {
				this.isAuthenticated = true;
			}, { redirectUri: ConfigService.AzureAD.redirectUrl });
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
			this.app.loginRedirect(ConfigService.AzureAD.b2cScopes);
		}
	}

	public logout() {
		this.app.logout();
	}
}
