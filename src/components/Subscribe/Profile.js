import React, { useContext, Suspense, lazy } from "react";
import { NavLink, Route, Switch} from 'react-router-dom'
import { AuthContext } from '../../context/Auth'
import "../../assets/css/Profile.css"

import ProfileInfo from './ProfileInfo'
import Loading from '../Main/Loading'
import Signout from './Signout'
const ProfileCourses = lazy(() => import('./ProfileCourses'));
const Account = lazy(() => import('./Account'));

const Profile = () => {
  const { currentUser } = useContext(AuthContext)
  console.log(currentUser)
  return (
      <div className="profile">
        <div className="row">
          <div className="col-3 profile-sidebar">
            <ul className="profile-sidebar-list">
              <NavLink to="/profile/info" className="mt-4" activeClassName="profile-sidebar-elem__active">
                <li className="profile-sidebar-elem">About me</li>
              </NavLink>
              <NavLink to="/profile/mycourses" activeClassName="profile-sidebar-elem__active">
                <li className="profile-sidebar-elem">My Courses</li>
              </NavLink>
              <NavLink to="/profile/account" activeClassName="profile-sidebar-elem__active">
                <li className="profile-sidebar-elem">My Account</li>
              </NavLink>
               <NavLink to="/profile/signout" activeClassName="profile-sidebar-elem__active">
                <li className="profile-sidebar-elem">Sign out</li>
              </NavLink>
            </ul>
          </div>
          <div className="col-8 profile-info ">
            <div className="media py-4">
              <img src="/images/profilepicture.png" className="align-self-start mr-3" alt="Profile" width="100"/>
              <div className="media-body">
                <div className="d-flex flex-row align-items-center justify-content-between mb-5">
                  <div>
                    <h5 className="profile-title">{currentUser.displayName}</h5>
                    <h3 className="profile-position" >Baku / React Developer</h3>
                  </div>
                  <div>
                    <ul className="profile-social">
                      <li>
                          <a href="#">
                              <i className="fab fa-facebook-f"></i>
                          </a> 
                      </li>
                      <li>
                          <a href="#">
                              <i className="fab fa-google-plus-g"></i>
                          </a>
                      </li>
                      <li>
                          <a href="#">
                              <i className="fab fa-instagram"></i>
                          </a>
                      </li>
                      <li>
                          <a href="#">
                              <i className="fab fa-twitter"></i>
                          </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <hr />
                <Suspense fallback={<Loading />}>
                  <Switch>
                      <Route path='/profile/info' exact component={ProfileInfo}  />
                      <Route path='/profile/mycourses' exact component={ProfileCourses}  />
                      <Route path='/profile/account' exact render={() => <Account email={currentUser.email} name={currentUser.displayName} date={currentUser.metadata.creationTime} />}  />
                      <Route path='/profile/signout' exact component={Signout}  />
                  </Switch>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Profile;