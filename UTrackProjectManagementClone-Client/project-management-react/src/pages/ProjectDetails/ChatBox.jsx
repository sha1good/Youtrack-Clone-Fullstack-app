import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  fetchChatByProject,
  fetchChatMessages,
  sendMessage,
} from "@/redux/chat/Action";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const { auth, chat } = useSelector((store) => store);
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    dispatch(
      sendMessage({ senderId: auth.user?.id, projectId: id, content: message })
    );
    setMessage("");
    console.log("message", message);
  };

  useEffect(() => {
    dispatch(fetchChatMessages(chat.chat?.id));
  }, [chat.chat?.id, dispatch]);

  console.log("Chat", chat);
  return (
    <div className="sticky">
      <div className="border rounded-lg">
        <h1 className="border-b p-5"> ChatBox </h1>
        <ScrollArea className="h-[32rem] flex w-full p-5 gap-3 flex-col">
          {chat.messages.map((item) =>
            item?.sender.id !== auth.user.id ? (
              <div className="flex gap-2 mb-2 justify-start" key={item}>
                <Avatar>
                  <AvatarFallback>R</AvatarFallback>
                </Avatar>
                <div className="space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl">
                  <p>Sheriff</p>
                  <p>How are you?</p>
                </div>
              </div>
            ) : (
              <div className="flex gap-2 mb-2 justify-end" key={item}>
                <div className="space-y-2 py-2 px-5 border rounded-se-2xl rounded-s-xl">
                  <p>{item?.sender.fullName}</p>
                  <p>{item.content}</p>
                </div>
                <Avatar>
                  <AvatarFallback>{item?.sender.fullName[0]}</AvatarFallback>
                </Avatar>
              </div>
            )
          )}
        </ScrollArea>
        <div className="relative p-0">
          <Input
            placeholder="type a message"
            className="py-7 border-t outline-none focus:outline-none
              focus:ring-0 rounded-none border-b-0 border-x-0"
            value={message}
            onChange={handleMessageChange}
          />
          <Button
            className="absolute right-2  top-3 rounded-full"
            size="icon"
            onClick={handleSendMessage}
          >
            <PaperPlaneIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
