import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/socketContext.jsx";

function ChatUser() {
  const { selectedConversation } = useConversation();
  console.log(selectedConversation);
  const { socket, onlineUsers } = useSocketContext();
  console.log(selectedConversation);

  const getOnlineUserStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Offline" : "Online";
  };

  return (
    <>
      <div className=" pl-5 pt-5 h-[12vh] flex space-x-4 bg-gray-900 hover:bg-gray-600 duration-300">
        <div>
          {/* <div className={`avatar ${isOnline ? "online" : ""}`}> */}
          <div className={`avatar online`}>
            <div className="rounded-full w-14">
               <img src="https://tse4.mm.bing.net/th?id=OIP.MbvaAWI59ugLCAI4D6o3DAAAAA&pid=Api&P=0&h=180" />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl">{selectedConversation.name}</h1>
          
          
          <span className="text-sm">
            {getOnlineUserStatus(selectedConversation._id)}
          </span>
        </div>
      </div>
    </>
  );
}

export default ChatUser;
