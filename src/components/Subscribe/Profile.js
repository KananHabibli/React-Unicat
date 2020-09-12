import React, { useContext, Suspense, lazy } from "react";
import { NavLink, Route, Switch} from 'react-router-dom'
import { AuthContext } from '../../context/Auth'
import "../../assets/css/Profile.css"

import ProfileInfo from './ProfileInfo'
import Loading from '../Main/Loading'
import Signout from './Signout'
const Account = lazy(() => import('./Account'));

const Profile = () => {
  const { currentUser } = useContext(AuthContext)
  console.log(currentUser)
  return (
      <div className="profile">
        <div className="row">
          <div className="col-3 profile-sidebar">
            <ul className="profile-sidebar-list">
              <NavLink to="/profile/info" activeClassName="active">
                <li className="profile-sidebar-elem">About me</li>
              </NavLink>
              <NavLink to="/profile/account" activeClassName="active">
                <li className="profile-sidebar-elem">My Account</li>
              </NavLink>
              <NavLink to="/profile/mycourses" activeClassName="active">
                <li className="profile-sidebar-elem">My Courses</li>
              </NavLink>
               <NavLink to="/profile/signout" activeClassName="active">
                <li className="profile-sidebar-elem">Sing out</li>
              </NavLink>
            </ul>
          </div>
          <div className="col-9 profile-info">
            <div className="media">
              <img src="/images/profilepicture.png" className="align-self-start mr-3" alt="Profile" width="100"/>
              <div className="media-body">
                <h5 className="mt-0 profile-title">{currentUser.displayName}</h5>
                <h3 className="profile-position" >Baku / React Developer</h3>
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
                <hr />
                <Suspense fallback={<Loading />}>
                  <Switch>
                      <Route path='/profile/info' exact component={ProfileInfo}  />
                      <Route path='/profile/account' exact component={Account}  />
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