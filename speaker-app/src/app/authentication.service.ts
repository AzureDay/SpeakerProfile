import { Injectable } from '@angular/core';

import { BroadcastService, MsalService} from "@azure/msal-angular";

import { HttpClient } from '@angular/common/http';
import { Subscription } from "rxjs";

import { ConfigService } from "./config.service";

@Injectable({
  	providedIn: 'root'
})

export class AuthenticationService {

	public isAuthenticated: boolean = false;
	// private subscription: Subscription;

	constructor(private authService: MsalService, private http: HttpClient, private broadcastService: BroadcastService) {
	}

	ngOnInit() {
		// this.loadGraphProfile();
		//
		// this.subscription = this.broadcastService.subscribe("msal:acquireTokenSuccess", (payload) => {
		// 	this.isAuthenticated = true;
		// 	console.log("acquire token success " + JSON.stringify(payload));
		// });
		//
		// this.subscription = this.broadcastService.subscribe("msal:acquireTokenFailure", (payload) => {
		// 	console.log("acquire token failure " + JSON.stringify(payload));
		// 	this.isAuthenticated = false;
		// });
		//
		// this.broadcastService.subscribe("msal:loginFailure", (payload) => {
		// 	console.log("acquire token failure " + JSON.stringify(payload));
		// 	this.isAuthenticated = false;
		//
		// });
		//
		// this.broadcastService.subscribe("msal:loginSuccess", (payload) => {
		// 	console.log("acquire token success " + JSON.stringify(payload));
		// 	this.isAuthenticated = true;
		// });
	}

	ngOnDestroy() {
		// this.broadcastService.getMSALSubject().next(1);
		// if (this.subscription) {
		// 	this.subscription.unsubscribe();
		// }
	}

	public checkAuthentication(): void {
		this.isAuthenticated = !!this.authService.getUser();
	}

	public login() {
		this.authService.loginRedirect(ConfigService.AzureAD.b2cScopes);
	}

	public logout() {
		this.authService.logout();
	}

	public loadGraphProfile() {
		console.log(this.authService.getUser().idToken);

		console.log("object id: " + this.authService.getUser().idToken['oid']);

		console.log("city: " + this.authService.getUser().idToken['city']);
		console.log("country: " + this.authService.getUser().idToken['country']);
		console.log("email: " + this.authService.getUser().idToken['emails'][0]);
		console.log("company: " + this.authService.getUser().idToken['extension_Company']);
		console.log("jobTitle: " + this.authService.getUser().idToken['jobTitle']);
		console.log("last name: " + this.authService.getUser().idToken['family_name']);
		console.log("first name: " + this.authService.getUser().idToken['given_name']);
	}
}
