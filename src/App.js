import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Aux from './hoc/Aux'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


import Unicat from './container/Unicat'
import About from './components/About/About'
import Courses from './components/Courses/Courses'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
function App() {
  return (
    <Aux>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Unicat} />
        <Route path='/about' exact component={About} />
        <Route path='/courses' exact component={Courses} />
        <Route path='/blog' exact component={Blog} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
      <Footer />
    </Aux>
  );
}

export default App;
