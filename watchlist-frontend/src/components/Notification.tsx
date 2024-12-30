import Alert from 'react-bootstrap/esm/Alert';
import { NotificationStyle } from '../types';

interface NotificationProps {
  message?: string;
  style?: NotificationStyle;
}

const Notification = ({ message, style }: NotificationProps) => {
  return message ? (
    <Alert variant={style}>{message}</Alert>
  ) : (
    <div className="alert-placeholder" />
  );
};

export default Notification;
