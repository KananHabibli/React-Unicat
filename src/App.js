import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Aux from './hoc/Aux'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


import Unicat from './container/Unicat'
import About from './components/About/About'
function App() {
  return (
    <Aux>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Unicat} />
        <Route path='/about' exact component={About} />
      </Switch>
      <Footer />
    </Aux>
  );
}

export default App;
