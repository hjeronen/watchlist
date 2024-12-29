import { NotificationStyle } from '../types';

interface NotificationProps {
  message?: string;
  style?: NotificationStyle;
}

const Notification = ({ message, style }: NotificationProps) => {
  const error = {
    border: 'solid',
    color: 'red',
  };

  return message ? (
    <div style={style === 'error' ? error : {}}>{message}</div>
  ) : null;
};

export default Notification;
