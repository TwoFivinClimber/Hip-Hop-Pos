import domBuilder from '../components/domBuilder';
import domEvents from '../components/events/domEvents';
import formEvents from '../components/events/formEvents';
import navEvents from '../components/events/navEvents';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import homeButtons from '../components/pages/homeScreen';

const startApp = (user) => {
  domBuilder();
  navBar();
  homeButtons(user);
  logoutButton();
  navEvents(user);
  formEvents(user.uid);
  domEvents(user.uid);
};

export default startApp;
