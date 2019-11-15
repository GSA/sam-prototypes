
export enum HelpType {
    Video = 0,
    Term,
    FAQ,
    Feature
}

export interface HelpData {
    id: string;
    type: HelpType;
    title: string;
    shortDescription: string;
    fullDescription: string;
    modifiedDate: string;
}

export interface VideoData extends HelpData {
    
}

export interface FAQData extends HelpData {
    
}

export interface TermData extends HelpData {
    
}

export interface FeatureData extends HelpData {
    
}