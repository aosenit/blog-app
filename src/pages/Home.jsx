import React from 'react'
import HomeTop from '../components/HomeTop'
import Sidebar from '../components/Sidebar'
import Posts from '../Posts'

const Home = () => {
    return (
       <div className="home">
         <HomeTop />
        <div className="homePostsContainer container">
          <Posts />
          <Sidebar />
        </div>
      </div>
    );
}

export default Home
