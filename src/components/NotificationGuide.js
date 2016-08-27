import React from 'react';

import '../styles/NotificationGuide.css';

const NotificationGuide = () => {

  const requestPermission = () => {
    const permission = Notification.permission;
    if (permission === 'granted') {
      alert('You\'ve enabled the desktop notification already!');
    } else {
      Notification.requestPermission();
    }
  }

  return (
    <div className="ui message notification-guide">
      <div className="header">
        Notifications
      </div>
      <h5>You can change the audio tone and volume via Settings</h5>
      <h5>Desktop Notifications are currently supported in Chrome, Firefox and Safari</h5>
      <button className="ui primary button" onClick={requestPermission}>Enable Desktop Alerts</button>
    </div>
  );
}

export default NotificationGuide;
