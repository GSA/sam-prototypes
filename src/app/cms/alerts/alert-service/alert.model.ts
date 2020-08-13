
export enum AlertStatus {
    Active,
    Inactive
}

export interface AlertData {
    id: string;
    type: string;
    description: string;
    date: string;
    requestedBy: string;
    status: AlertStatus;
}