import React from 'react';

import '../styles/ShortcutGuide.css';

const addSpace = (string) => {
  return string.replace(/ /g, "\u00a0");
}

const ShortcutGuide = () => {
  return (
    <div className="ui message shortcut-guide">
      <div className="header">
        Keyboard Shortcuts
      </div>
      <div className="ui two column grid">
        <div className="column">
          <ul className="">
            <li><strong>SPACE</strong>{addSpace('       Start/Stop the timer')}</li>
            <li><strong>ALT + P</strong>{addSpace('     Pomodoro')}</li>
            <li><strong>ALT + S</strong>{addSpace('     Short Break')}</li>
          </ul>
        </div>
        <div className="column">
          <ul className="">
            <li><strong>ALT + L</strong>{addSpace('     Long Break')}</li>
            <li><strong>ALT + R</strong>{addSpace('     Reset Timer')}</li>
          </ul>
        </div>
      </div>
      {/* <ul className="">
        <li><strong>SPACE</strong>{addSpace('       Start/Stop the timer')}</li>
        <li><strong>ALT + P</strong>{addSpace('     Pomodoro')}</li>
        <li><strong>ALT + S</strong>{addSpace('     Short Break')}</li>
        <li><strong>ALT + L</strong>{addSpace('     Long Break')}</li>
        <li><strong>ALT + R</strong>{addSpace('     Reset Timer')}</li>
      </ul> */}
    </div>
  );
}

export default ShortcutGuide;
