import React from 'react'
import { PlusSquareIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

const Write = () => {
    return (
      <div className="write container">
        <img
          src="https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhlYWx0aHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="writeTitle">
          <div className="writeFile">
            <label htmlFor="profile-pix">
              <li>
                <PlusSquareIcon w={8} h={8} />
              </li>
            </label>
            <input type="file" id="profile-pix" style={{ display: 'none' }} />
          </div>
          <input type="text" placeholder="Title" />
          <Button colorScheme="blue">Publish</Button>
        </div>
        <textarea
          name="writeText"
          id=""
          cols="30"
          rows="10"
          placeholder="Tell your story..."
        ></textarea>
      </div>
    );
}

export default Write
