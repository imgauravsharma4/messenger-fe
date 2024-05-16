import { faHeart, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Post = ({item, handleClick}) => {
  const handleModel = () => {
      handleClick(item)
  };
  return (
    <div className='post-wrapper' onClick={handleModel}>
      <div className='post-image'>
        <img
          src='https://images.unsplash.com/photo-1599110364762-eba33ec21988?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
          className='img-fluid'
        />
      </div>
      <div className='overlay'>
        <span className='item'>
          <FontAwesomeIcon icon={faHeart} />2
        </span>
        <span className='item'>
          <FontAwesomeIcon icon={faMessage} /> 5
        </span>
      </div>
    </div>
  );
};

export default Post;
