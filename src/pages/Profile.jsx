import React from 'react'
import { PlusSquareIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';

const Profile = () => {
    return (
      <div className="profile container">
        <form className="profileForm">
          <h1>Update Account</h1>
          <h3>Profile Picture</h3>
          <div className="profilePix">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <label htmlFor="profile-pix">
              <li>
                <PlusSquareIcon w={8} h={8} />
              </li>
            </label>
            <input type="file" id="profile-pix" style={{ display: 'none' }} />
          </div>

          <h3>Username</h3>
          <input type="text" placeholder="ade" required />
          <h3>Email</h3>
          <input type="email" placeholder="ade@yahoo.com" required />
          <h3>Password</h3>
          <input type="password" placeholder="password" required />

          <div className="formProfileBtns">
            <Button colorScheme="blue">
              Update Account
            </Button>
            <Button colorScheme="red">Delete Account</Button>
          </div>
        </form>
        <Sidebar />
      </div>
    );
}

export default Profile
