import React from 'react';
import Post from './Post';
import { Link } from 'react-router-dom';

const Posts = () => {
  return (
    <div className="posts">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
