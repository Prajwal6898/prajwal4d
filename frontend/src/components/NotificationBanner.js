import React from 'react';
import './NotificationBanner.css';

function NotificationBanner() {
  return (
    <div className="notification-banner">
      <div className="notification-content">
        <span className="notification-icon">🚧</span>
        <p>Website Under Construction: We're making major improvements to enhance your experience!</p>
      </div>
    </div>
  );
}

export default NotificationBanner; 