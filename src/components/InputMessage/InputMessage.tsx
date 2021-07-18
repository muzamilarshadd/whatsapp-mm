import * as React from "react";
import {useState} from 'react'
import "./InputMessage.css";
// import { ReactComponent as AttachmentIcon }  from "../../components/icons/ic_attachment.svg" //webpack etc
interface msg  {
  id:number,
  name:string,
  messages:Array<string>,

}
function InputMessage({ 
  showId = 0, 
  data = {id: 0, name: '',messages: []}, 
  setMessage = (tempArr:any) => {} 
}) 
{

  let tempArr:msg = {
    id: data.id,
    name: data.name,
    messages: data.messages,
  };
  const [tempMessage, setTempMessage] = useState("");

  const formSubmit = () => {
      tempArr.messages = [tempMessage, ...tempArr.messages]
    setMessage(tempArr)
    // e.target.reset()
     setTempMessage("")
  };
  return (
    <div className="main-div">
      
        <button className="emoji-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <circle cx="15.5" cy="9.5" r="1.5" />
            <circle cx="8.5" cy="9.5" r="1.5" />
            <path d="M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
          </svg>
        </button>
        <button className="attach-button">
         {/* <AttachmentIcon /> */}
        Attach
        </button>
      
      <input
        className="input-field"
        type="text"
        placeholder="Type a new message"
        onChange={(e) => setTempMessage(e.target.value)}
        value={tempMessage}
      />
      <button className="send-button" type="submit" onClick={formSubmit}>
        Send
      </button>
      <div>
        <button className="mic-button">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <g>
              <rect fill="none" height="24" width="24" />
              <rect fill="none" height="24" width="24" />
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <g />
              <g>
                <path d="M12,14c1.66,0,3-1.34,3-3V5c0-1.66-1.34-3-3-3S9,3.34,9,5v6C9,12.66,10.34,14,12,14z" />
                <path d="M17,11c0,2.76-2.24,5-5,5s-5-2.24-5-5H5c0,3.53,2.61,6.43,6,6.92V21h2v-3.08c3.39-0.49,6-3.39,6-6.92H17z" />
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default InputMessage;
