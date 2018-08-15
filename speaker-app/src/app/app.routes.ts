import { Routes } from "@angular/router";

import { AppComponent } from "./app.component";

export const appRoutes: Routes = [
	{ path: 'profile', component: AppComponent  },
	{ path: '', redirectTo: 'profile', pathMatch: 'full' },
	// { path: '**', redirectTo: '' }
];
