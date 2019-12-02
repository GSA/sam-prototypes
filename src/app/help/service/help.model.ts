
export enum HelpType {
    Video = 0,
    Term,
    FAQ,
    Feature
}

export interface HelpLink {
    id: string;
    title: string;
}

export interface HelpData {
    id: string;
    type: HelpType;
    title: string;
    videoUrl: string;
    shortDescription: string;
    fullDescription: string;
    modifiedDate: string;
    relatedHelp: HelpLink[];
}