
export enum MessageStatus {
    None = 0,
    Success,
    Information,
    Warning,
    Error
}

export enum MessageType {
    Alert = 1,
    Notification,
    News
}

export interface MessageData {
    id: string;
    type: MessageType;
    title: string;
    description: string;
    date: string;
    status: MessageStatus;
}