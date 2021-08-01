import * as React from "react"
import {useState, useEffect, useContext } from 'react'
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SideBar from "../SideBar/SideBar"
import MessagesContainer from '../MessagesContainer/MessagesContainer'
import "./SimpleContainer.css"
import { ThemeContext, ThemeProps } from "../../contexts/ThemeContext";

export interface Name {
  id: number;
  name: string;
}

const SimpleContainer : React.FC = () => {
  const theme = useContext<ThemeProps>(ThemeContext);
  const [count, setCount] = useState<number>(0);
  const [showId, setShowId] = useState<number>(0);
  const [currentName, setCurrentName] = useState< Name [] >([{name : '', id: 0}]);
  const [messagesStorage, setMessagesStorage] = useState([{
    id: currentName[0].id,
    name: currentName[0].name,
    messages: [],
  }]);

  const setCurrentNameHandler = ( idParam: number, currentNameParam : string ) => {
    setCurrentName([
      {
        id: idParam,
        name: currentNameParam,
      },
      ...currentName,
    ]);
  };

  const setCountHandler =  ( countParam : number) => {
    setCount( countParam );
  };

  useEffect(()=>{
    if(count > 0) {
    setMessagesStorage([{
      id: currentName[0].id,
      name: currentName[0].name,
      messages: [],
    },...messagesStorage])}
  },[currentName]);


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
          <div className={ theme.theme === "dark" ? "container-div-dark" :"container-div" }>
            <SideBar  setShowId={setShowId} setCurrentName={setCurrentNameHandler} currentName={currentName} setCount={setCountHandler} count = {count}/>
            {showId > 0 &&
            <MessagesContainer show={showId} message={messagesStorage} setMessage={setMessagesStorage}/>
            }
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default SimpleContainer;
