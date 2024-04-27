import React from "react";

const Message = ({classes, message}) => {
  return (
    <div className={`message ${classes}`}>
      {message}
    </div>
  );
};

export default Message;
