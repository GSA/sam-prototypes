
export enum RequestStatus {
    Approved = 0,
    Rejected,
    Pending,
    Draft
}

export interface RequestData {
    id: string;
    type: string;
    description: string;
    date: string;
    requestedBy: string;
    status: RequestStatus;
}