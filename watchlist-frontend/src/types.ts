export interface Movie {
  id: string;
  title: string;
}

export type NewMovie = Omit<Movie, 'id'>;

export type NotificationStyle = 'error';

export interface NotificationType {
  message: string;
  style: NotificationStyle;
}
