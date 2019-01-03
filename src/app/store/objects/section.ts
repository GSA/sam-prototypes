export class Section {

	title: string;
	icon: string;
	description: string;
	url: string;
	sidetoolKeys: string;
	showPublic: boolean;

	constructor(title: string, icon: string, description: string, url: string, sidetoolKeys: string, showPublic: boolean) {
	   this.title = title;
	   this.icon = icon;
	   this.description = description;
	   this.url = url;
	   this.sidetoolKeys = sidetoolKeys;
	   this.showPublic = showPublic;
	}
}
