import React from "react";

const UserCard = ({ conversation, user, handleClick, index }) => {
  const handleOnClick = () => {
    handleClick(conversation);
  };
  return (
    <div key={`index${index}`}>
      <div
        className='d-flex align-items-center user-card'
        onClick={handleOnClick}
      >
        <div className='profile-image-wrapper'>
          <img
            src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='iamge'
          />
        </div>
        <div>
          <p>
            {user?.id === conversation?.receiverId
              ? conversation?.sender?.firstName
              : conversation?.receiver?.firstName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
