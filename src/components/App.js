import React from 'react';
import '../styles/App.css';
import PomodoroButtons from './PomodoroButtons';
import Timer from './Timer';
import ControlButtons from './ControlButtons';
import Nav from './Nav';
import ShortcutGuide from './ShortcutGuide';
import NotificationGuide from './NotificationGuide';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <div className="ui text center aligned container App-content">
        <PomodoroButtons />
        <Timer />
        <ControlButtons />
      </div>
      <div className="ui two column doubling stackable very relaxed grid container">
        <div className="column">
          <ShortcutGuide />
        </div>
        <div className="column">
          <NotificationGuide />
        </div>
      </div>
    </div>
  );
}

export default App;
