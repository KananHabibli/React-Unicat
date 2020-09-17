import React, { Suspense, lazy, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';


import Unicat from './container/Unicat'
import Loading from './components/Main/Loading'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { AuthProvider, AuthContext } from './context/Auth'

import "./App.css"

const About    = lazy(() => import('./components/About/About'));
const Courses  = lazy(() => import('./components/Courses/Courses'));
const Blog     = lazy(() => import('./components/Blog/Blog'));
const Contact  = lazy(() => import('./components/Contact/Contact'));
const Login    = lazy(() => import('./components/Subscribe/Login'));
const Register = lazy(() => import('./components/Subscribe/Register'));
const Profile = lazy(() => import('./components/Subscribe/Profile'));
const SingleCourse = lazy(() => import('./components/Courses/SingleCourse'))

const App = () => {
  return (
    <AuthProvider>
      <Suspense fallback={<Loading />}>
        <Navbar />
          <Switch>
            <Route path='/'         exact component={Unicat}  />
            <Route path='/about'    exact component={About}   />
            <Route path='/courses'  exact component={Courses} />
            <Route path='/blog'     exact component={Blog}    />
            <Route path='/contact'  exact component={Contact} />
            <Route path='/login'       component={Login} />
            <Route path='/register'    component={Register} />
            <Route path='/profile'     component={Profile} />
            <Route path='/loading'     component={Loading} />
            <Route path='/:id/:title'  component={SingleCourse} />
            <Route render={() => <h2 className="text-center error">404 Page not found</h2>} />
          </Switch>
        <Footer />
      </Suspense>
    </AuthProvider>
  )
}

export default App;
