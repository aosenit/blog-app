import React from 'react'

const Sidebar = () => {
    return (
      <div className="sidebar">
        <div className="sidebarAbout">
          <h2>ABOUT ME</h2>
          <img
            src="https://images.unsplash.com/photo-1599552683573-9dc48255fe85?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEzfHxoZWFsdGh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            nam ad in facilis explicabo veritatis, dicta ducimus odio
            consequatur fugiat.
          </p>
        </div>
        <div className="sidebarCategories">
          <h2>CATEGORIES</h2>
          <ul>
            <li>Life</li>
            <li>Music</li>
            <li>Sports</li>
            <li>Style</li>
            <li>Tech</li>
            <li>Cinema</li>
          </ul>
        </div>

        <div className="sidebarFollowUs">
          <h2>FOLLOW US</h2>
          <ul>
            <li>
              <i class="fab fa-facebook-square"></i>
            </li>
            <li>
              <i class="fab fa-twitter-square"></i>
            </li>
            <li>
              <i class="fab fa-linkedin"></i>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Sidebar
