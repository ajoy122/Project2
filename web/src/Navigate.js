import React from 'react';

import './global.css'
import './App.css'
import './nav.css'
import './Aside.css'

// import logo from './logo.svg';
// import './App.css';

function Navigate() {
 

  return (
    <div id="app">
      <nav>
        <h1 id="logo">Taste of Kerala</h1>
        <ul>
          <li>
            <a href="About.js">Home</a>
          </li>
          <li>
            <a href="About.js">About us</a>
          </li>
          <li>
            <a href="About.js">Menu</a>
          </li>
          <li>
            <a href="About.js">Order</a>
          </li>
          <li>
            <a href="About.js">Make a reservation</a>
          </li>
          <li>
            <a href="About.js">Feedback</a>
          </li>
        </ul>
      </nav>
    <aside>
      <strong>Sign Up</strong>
      <form>
        <input id='first_name' placeholder='First Name' />
        <input id='last_name' placeholder='Last Name' />
        <input id='Number' placeholder='Phone Number' />
        <input id='Address' placeholder='Address' />
        <input id='Zipcode' placeholder='Zip Code' />
        <input id='user_name' placeholder='Username' />
        <input id='email' placeholder='Email' />
        <input type="password" id='password' placeholder='Password' />
        <input type="password" id='re_password' placeholder='Repeat Password' />
       
        <div className="buttons">
          <input type='reset' />
          <input type='submit' />
        </div>
      </form>
    </aside>
    <main>

    </main>
  </div>
    // <h1>Hello World</h1>
       
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default Navigate;
