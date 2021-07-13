import * as React from "react"
import {useState, useEffect} from 'react'
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SideBar from "../SideBar/SideBar"
import MessagesContainer from '../MessagesContainer/MessagesContainer'
import "./SimpleContainer.css"

export default function SimpleContainer() {
  const [count, setCount] = useState(0)
  const [showId, setShowId] = useState<any>()
  const [currentName, setCurrentName] = useState<any>([{name : '', id: 0}])
  const [messagesStorage, setMessagesStorage] = useState([{
    id: currentName[0].id,
    name: currentName[0].name,
    messages: [],
  }])
  useEffect(()=>{
    if(count > 0) {
    setMessagesStorage([{
      id: currentName[0].id,
      name: currentName[0].name,
      messages: [],
    },...messagesStorage])}
  },[currentName])
  return ( 
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography
          component="div"
          style={{ backgroundColor: "#3a9689", height: "2.5vh" }}
        />
        <Typography
          component="div"
          style={{ backgroundColor: "#ededed", height: "95.5vh" }}
        >
          <div className="container-div">
            <SideBar  setShowId={setShowId} setCurrentName={setCurrentName} currentName={currentName} setCount={setCount} count = {count}/>
            {/* <Divider orientation="vertical" flexItem /> */}
            {/* <SecondaryNavBar />        */}
            {showId > 0 &&
            <MessagesContainer show={showId} message={messagesStorage} setMessage={setMessagesStorage}/>
            }
          </div>
          {/* <Divider orientation="vertical" flexItem />
        <NavigationBar />
        <Divider />
        <SideBar />
        <Divider orientation="vertical" flexItem /> */}
        </Typography>
      </Container>
    </React.Fragment>
  );
}
