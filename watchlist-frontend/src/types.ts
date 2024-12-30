export interface Movie {
  id: string;
  title: string;
  watched: boolean;
}

export type NewMovie = Omit<Movie, 'id' | 'watched'>;

export type NotificationStyle = 'danger' | 'info' | 'success';

export interface NotificationType {
  message: string;
  style: NotificationStyle;
}
