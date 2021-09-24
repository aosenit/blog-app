import React from 'react'
import { Box, Image } from '@chakra-ui/react';


const Post = () => {
     
    return (
      <div className="post">
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://bit.ly/2Z4KKcF" alt="" />
          <div className="postContent">
            <h3>Health</h3>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <h4>1 hour ago</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              alias cum quas, fugit repellendus cupiditate voluptatem omnis
              dicta soluta, dolores eius excepturi molestiae consequuntur
             
            </p>
          </div>
        </Box>
      </div>
    );
}

export default Post
