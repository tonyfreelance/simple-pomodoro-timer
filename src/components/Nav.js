import React from 'react';
import faq from '../images/faq.png';

class Nav extends React.Component {

  showFAQ = (e) => {
    e.preventDefault(); // eslint-disable-next-line
    $('.ui.modal').modal('show');
  };

  render() {
    return (
      <div>
        <div className="ui stackable menu">
          <div className="header item">
            Pomodoro Timer
          </div>
          <a className="item active">
            Home
          </a>
          <a className="item" onClick={this.showFAQ}>
            FAQ
          </a>
          {/* <a className="item">
            Settings
          </a> */}
          <a className="item" href="https://twitter.com/intent/tweet?text=Pomodoro Timer: A simple Pomodoro Technique Timer&&url=https://simple-pomodoro-timer.herokuapp.com&&hashtags=pomodoro productive&&via=tonyfreelance88" target="_blank">
            Tweet about us!
          </a>
          {/* <div className="right menu">
            <a className="item">
            Logout
            </a>
          </div> */}
        </div>
        <div className="ui modal">
          <i className="close icon"></i>
          <div className="header">
            Frequently Asked Questions
          </div>
          <div className="image content">
            <div className="ui medium image">
              <img src={faq} alt="FAQ"/>
            </div>
            <div className="description">
              <p>
                <strong>Q. What is Pomodoro Technique?</strong>
                <br/>
                A. The time management technique created by Francesco Cirillo for a  more productive way to work and study. For more information, <a href="http://www.pomodorotechnique.com/">click here</a>.
              </p>

              <p>
                <strong>Q. Can you tell me the story without having to visit the website?</strong>
                <br/>
                A. Well, it comprises of the following basic steps:
                <ul>
                  <li>Decide on the task at hand</li>
                  <li>Set the Pomodoro (timer) to 25 minutes</li>
                  <li>Work on the task until the timer expires; Record with an X</li>
                  <li>Take a Short Break (5 minutes)</li>
                  <li>Every four "pomodoros", take a Long Break (15 minutes)</li>
                </ul>
              </p>

              <p>
                <strong>Q. What is Pomodoro Timer?</strong>
                <br/>
                A. It's an easy to use, flexible Pomodoro Technique timer. It was inspired by Tomatoi.st and it uses <a href="http://semantic-ui.com/">Sematic-UI</a> and <a href="https://facebook.github.io/react/index.html">React</a> + <a href="http://redux.js.org/">Redux</a>.
              </p>

              <p>
                <strong>Q. Why use Pomodoro Timer?</strong>
                <br/>
                A. Here's why:
                <ul>
                  <li>Clean and Crisp interface with a Mobile friendly layout.</li>
                  <li>Ability to Pause or Reset the timer intervals.</li>
                  {/* <li>Audio notifications at the end of a timer period.</li> */}
                  <li>Desktop notifications.</li>
                  <li>Keyboard shortcuts.</li>
                  {/* <li>Ability to change the alert sound + volume via Settings</li> */}
                  <li>Custom Timer Intervals (Coming soon.)</li>
                  <li>A history of your activity. (Coming soon.)</li>
                </ul>
              </p>

              <p>
                <strong>Q. I've got some feedback. How do I get in touch with you?</strong>
                <br/>
                A. <a href="mailto:tony@tonyfreelance.com">Email me</a>.
              </p>
            </div>
          </div>
          <div className="actions">
            <div className="ui positive button">OK</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
