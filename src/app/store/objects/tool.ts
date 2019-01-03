export class Tool {

	title: string;
	name: string;
	icon: string;
	isFullScreen: boolean;
	requiresSignin: boolean;

	constructor(title: string, name: string, icon: string, isFullScreen: boolean, requiresSignIn: boolean) {
	   this.title = title;
	   this.name = name;
	   this.icon = icon;
	   this.isFullScreen = isFullScreen;
	   this.requiresSignin = requiresSignIn;
	}
}
