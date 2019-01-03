import { Section } from './section';

export class Domain {

	title: string;
	icon: string;
	description: string;
	formerSite: string;
	sections: Section[];

	constructor(title: string, icon: string, description: string, url: string, formerSite: string, sections: Section[]) {
	   this.title = title;
	   this.icon = icon;
	   this.description = description;
	   this.formerSite = formerSite;
	   this.sections = sections;
	}
}
