import React, { FunctionComponent } from 'react';
import { hot } from 'react-hot-loader';

import Routes from './routes';

const App: FunctionComponent = () => (
  <>
    <header>
      <h3>Last Letter Game</h3>
    </header>
    <nav />
    <main>
      <Routes />
    </main>
    <footer>
      <i>By Yusuf Koca</i>
    </footer>
  </>
);

export default hot(module)(App);
