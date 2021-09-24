import React from 'react'
import Sidebar from '../components/Sidebar'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

const SinglePage = () => {
    return (
      <div className="singlePage container">
        <div className="blog">
          <img
            src="https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="blogTitle">
            <h1>Lorem, ipsum dolor.</h1>
            <div className="blogTitleIcon">
              <li><EditIcon /></li>
             <li><DeleteIcon /></li>
            </div>
          </div>
          <div className="blogAuthor">
            <h2>Author: Ade</h2>
            <h2>1 day ago</h2>
          </div>
          <div className="blogDetail">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            voluptate quasi hic soluta veniam officiis, iure eaque accusantium
            totam dicta. Nesciunt enim assumenda mollitia corrupti dignissimos
            asperiores voluptatibus, a repudiandae eum doloremque modi. Maiores
            ipsa saepe eius beatae asperiores. Temporibus iusto error eligendi
            optio impedit, nihil delectus esse id doloremque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni commodi temporibus sint. Quam, ex numquam? Corrupti sint laborum dolorem excepturi expedita quibusdam ex alias omnis iure magnam totam non enim cum animi atque placeat dolor saepe quia minima impedit, nesciunt eaque. Tempore laboriosam qui voluptatem vero enim explicabo hic animi?
          </div>
        </div>
        <Sidebar />
      </div>
    );
}

export default SinglePage
