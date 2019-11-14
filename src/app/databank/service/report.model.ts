
export enum ReportType {
    Standard = 0,
    Admin,
    AdHoc   
}

export interface SavedCriteria {
    id: string;
    title: string;
    lastRunDate: string;
    lastSavedDate: string;
}

export interface ReportData {
    id: string;
    type: ReportType;
    title: string;
    description?: string;
    domain: string;
    isFavorite: boolean;
    savedCriteria?: SavedCriteria[];
}