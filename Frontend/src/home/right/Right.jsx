import  { useEffect } from "react";
import ChatUser from "./ChatUser.jsx";
import Messages from "./Messages";
import Type from "./Type";
import useConversation from "../../state/useConversation.js";
import { useAuth } from "../../context/AuthProvider.jsx";

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="w-full text-gray-300 bg-slate-800">
      <div>
        {!selectedConversation ? (
          <NoChat />
        ) : (
          <>
            <ChatUser />
            <div
              className="flex-1 overflow-y-auto "
              style={{ maxHeight: "calc(88vh - 8vh)" }}
            >
              <Messages />
            </div>
            <Type />
          </>
        )}
      </div>
    </div>
  );
}

export default Right;

const NoChat = () => {
  const [authUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-xl font-semibold">Welcome <span>{authUser.user.name}</span>
          <br></br>Select a chat to start messaging.</h1>
      </div>
    </>
  );
};