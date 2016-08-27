import React from 'react';

const addSpace = (string) => {
  return string.replace(/ /g, "\u00a0");
}

const ShortcutGuide = () => {
  return (
    <div className="ui message">
      <div className="header">
        Keyboard Shortcuts
      </div>
      <ul className="list">
        <li><strong>SPACE</strong>{addSpace('       Start/Stop the timer')}</li>
        <li><strong>ALT + P</strong>{addSpace('     Pomodoro')}</li>
        <li><strong>ALT + S</strong>{addSpace('     Short Break')}</li>
        <li><strong>ALT + L</strong>{addSpace('     Long Break')}</li>
        <li><strong>ALT + R</strong>{addSpace('     Reset Timer')}</li>
      </ul>
    </div>
  );
}

export default ShortcutGuide;
