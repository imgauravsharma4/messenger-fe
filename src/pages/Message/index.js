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
    message: Yup.string()
      .required("Message cannot be empty")
      .max(200, "Character should be less than 200"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);
  const socket = io(API_URL);
  const [allConversations, setAllConversations] = useState([]);
  const [user, setUser] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [isReceived, setIsReceived] = useState(false);
  const [messages, setMessages] = useState([]);

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
    payload.senderId =
      user.id !== selectedChat.senderId
        ? selectedChat.receiverId
        : selectedChat.senderId;
    payload.conversationId = selectedChat.id;
    return apiService
      .postMessage(payload)
      .then((res) => {
        reset();
        socket.emit("sendMessage", payload);
        console.log("sent");
        setIsReceived(!isReceived);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  useEffect(() => {
    socket.on("connect", () => {
      console.log("CONNECTEDD");
    });
    getAllConversations();
    getUser();
  }, [socket]);

  useEffect(() => {
    if (user) {
      socket?.emit("addUsers", user.id);
    }
    socket?.on("getUsers", (users) => {
      console.log("users", users);
    });
    socket?.on("getMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });
  }, [socket, user]);

  console.log("messages", messages.length);
  useEffect(() => {
    if (selectedChat) {
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
                      allConversations.map((item, index) => (
                        <UserCard
                          index={index}
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
                      <button
                        type='submit'
                        className='send-button'
                        disabled={errors?.message ? true : false}
                      >
                        Send
                      </button>
                    </div>
                    {errors?.message && (
                      <span class='text-danger text-capatalize'>
                        {errors?.message?.message}
                      </span>
                    )}
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
