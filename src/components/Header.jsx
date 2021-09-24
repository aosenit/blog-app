import React from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import { Avatar} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';


const Header = () => {
  const user = false
    return (
      <div className="header">
        <div className="container headerContainer">
          <div className="headerLogo">TRAZ</div>

          <div className="headerCenterNav">
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="selected">
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/*" activeClassName="selected">
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink to="/*" activeClassName="selected">
                  CONTACT
                </NavLink>
              </li>
              <li>
                <NavLink to="/write" activeClassName="selected">
                  WRITE
                </NavLink>
              </li>
              {user && <li>LOGOUT</li>}
            </ul>
          </div>

          <div className="headerRightNav">
            <ul className="">
              {user ? ( 
              <li>
                <Avatar
                  size="xs"
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                />
              </li>) : (
                <>
                  <li>LOGIN</li>
                  <li>REGISTER</li>
                </>
              )}
            </ul>
            <div className="headerSearch">
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header
