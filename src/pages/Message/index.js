import UserCard from "components/Messages/UserCard";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { API_URL } from "utils/variables";
import Message from "components/Messages/Message";
import { apiService } from "services";
import UserProvider from "providers/UserProvider";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const MessagePage = () => {
  const validationSchema = Yup.object().shape({
    message: Yup.string().required("Message cannot be empty"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset } = useForm(formOptions);
  const socket = io(API_URL);
  const [allConversations, setAllConversations] = useState([]);
  const [user, setUser] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [messages, setMessages] = useState([]);
  const socketConnection = () => {
    socket.on("connect", () => {
      console.log("CONNECTEDD");
    });
  };
  const getAllConversations = async () => {
    return apiService
      .getAllConversations()
      .then((res) => {
        setAllConversations(res?.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  const getUser = async () => {
    return apiService
      .getUser()
      .then((res) => {
        setUser(res);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const handleClickConversation = async (item) => {
    setShowMessage(true);
    setSelectedChat(item);
  };

  const getAllMessages = (id) => {
    return apiService
      .getAllMessages(id)
      .then((res) => {
        setMessages(res?.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const onSubmit = (payload) => {
    payload.receiverId =
      user.id === selectedChat.senderId
        ? selectedChat.receiverId
        : selectedChat.senderId;
    return apiService
      .postMessage(payload)
      .then((res) => {
        reset();
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  useEffect(() => {
    // socketConnection();
    getAllConversations();
    getUser();
  }, []);

  useEffect(() => {
    if (selectedChat) {
      console.log("selectedChat", selectedChat);

      getAllMessages(selectedChat.id);
    }
  }, [selectedChat]);
  return (
    <UserProvider>
      <div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
              <div>
                <div className='conversation-list-card'>
                  <h1>Chats</h1>
                  <div className='user-card-wrapper'>
                    {allConversations &&
                      allConversations.length > 0 &&
                      allConversations.map((item) => (
                        <UserCard
                          conversation={item}
                          user={user}
                          handleClick={handleClickConversation}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-8 col-lg-8 col-md-6 col-sm-12'>
              {showMessage && (
                <>
                  <div className='message-box'>
                    <UserCard conversation={selectedChat} user={user} />
                    <div className='all-messages'>
                      <div className='messages-wrapper'>
                        {messages &&
                          messages.length > 0 &&
                          messages.map((item) => (
                            <Message
                              message={item.message}
                              classes={
                                user?.id === item.senderId ? "to" : "from"
                              }
                            />
                          ))}
                        {/* <Message message={"Hi"} classes={"to"} /> */}
                      </div>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='send-wrapper'>
                      <input
                        type='text'
                        name='message'
                        placeholder='write message'
                        {...register("message")}
                      />
                      <button type='submit' className='send-button'>
                        Send
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </UserProvider>
  );
};

export default MessagePage;
