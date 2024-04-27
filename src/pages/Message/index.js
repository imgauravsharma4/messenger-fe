import UserCard from "components/Messages/UserCard";
import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { API_URL } from "utils/variables";
import Message from "components/Messages/Message";

const MessagePage = () => {
  const socket = io(API_URL);

  const socketConnection = () => {
    socket.on("connect", () => {
      console.log("CONNECTEDD");
    });
  };
  useEffect(() => {
    socketConnection();
  }, []);
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
            <div>
              <div className='conversation-list-card'>
                <h1>Chats</h1>
                <div className='user-card-wrapper'>
                  <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard />
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-8 col-lg-8 col-md-6 col-sm-12'>
            <div className='message-box'>
              <div className='d-flex align-items-center user-card'>
                <div className='profile-image-wrapper'>
                  <img
                    src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='iamge'
                  />
                </div>
                <div>
                  <p>User 1</p>
                </div>
              </div>
              <div class='all-messages'>
                <div class='messages-wrapper'>
                  <Message message={"Hi, there"} classes={"from"} />
                  <Message message={"Hi"} classes={"to"} />
                </div>
              </div>
            </div>
            <div className="send-wrapper">
              <input type='text' placeholder='write message' />
              <button className="send-button">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
