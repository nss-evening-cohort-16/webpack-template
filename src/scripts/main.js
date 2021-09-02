// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>HELLO! You are up and running!</h1>
    <small>Open your dev tools</small><br />
    <button class="btn btn-danger" id="click-me">Click ME!</button><br />
    <hr />
  `;
  console.warn('YOU ARE UP AND RUNNING!');

  document
    .querySelector('#click-me')
    .addEventListener('click', () => console.warn('You clicked that button!'));

  // USE WITH FIREBASE AUTH
  // checkLoginStatus();
};

init();
