export interface Movie {
  title: string;
}

export type NotificationStyle = 'error';

export interface NotificationType {
  message: string;
  style: NotificationStyle;
}
