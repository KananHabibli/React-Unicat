import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import Aux from './hoc/Aux'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


import Unicat from './container/Unicat'
const About    = lazy(() => import('./components/About/About'));
const Courses  = lazy(() => import('./components/Courses/Courses'));
const Blog     = lazy(() => import('./components/Blog/Blog'));
const Contact  = lazy(() => import('./components/Contact/Contact'));
const Login    = lazy(() => import('./components/Subscribe/Login'));
const Register = lazy(() => import('./components/Subscribe/Register'));
const App = () => (
    <Aux>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/' exact component={Unicat} />
          <Route path='/about' exact component={About} />
          <Route path='/courses' exact component={Courses} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </Suspense>
      <Footer />
    </Aux>
  )


export default App;
