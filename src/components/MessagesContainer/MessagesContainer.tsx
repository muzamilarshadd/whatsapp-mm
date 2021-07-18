import * as React from "react";
import { useEffect } from 'react'
import "./MessagesContainer.css";
import SecondaryNavBar from "../SecondaryNavBar/SecondaryNavBar";
import InputMessage from "../InputMessage/InputMessage";
import MessagesDisplay from "../MessagesDisplay/MessagesDisplay";

function MessagesContainer({ 
  show = 0,
  message=[{id:0, name:"", messages:[]}],
  setMessage = (temp:any) => {}
 })
  {
  let Tempmessage :any = message //added later
  return (
      <div className="main-container">
        {message.length > 1 &&
          message
            .filter((Tempmessage) => Tempmessage.id === show)
            .map((data, index) => {
              const { name, id, messages } = data;
              const setMessages = (e:any) => {
                if (id > 0) {
                  let temp = message;
                  for (var i = 0; i < temp.length; i++) {
                    if (temp[i].id === id) {
                      temp[i] = e
                      break; //Stop this loop, we found it!
                    }
                  }

                  setMessage(temp);
                }
              };
              // setMessage()
              return (
                <>
                  <SecondaryNavBar currentName={name} />
                  <MessagesDisplay message={messages} key={index}/>
                  <InputMessage
                    showId={id}
                    data={data}
                    setMessage={setMessages}
                  />
                </>
              );
            })}
      </div>
    
  );
}

export default MessagesContainer;
