import React from "react";

const ProfilePictureCard = ({ url, size }) => {
  return (
    <div className="user-profile-picture" style={{width: `${size}px`, height:`${size}px` }}>
      <img src={url} alt='profile'/>
    </div>
  );
};

export default ProfilePictureCard;
