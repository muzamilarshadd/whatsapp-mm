import * as React from "react";
import { useState, useRef, useEffect, useContext } from "react"
import "./SideBar.css";
import MainNavBar from "../MainNavBar/MainNavBar";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import { Divider } from "@material-ui/core";
import SideBarMessages from "../SideBarMessages/SideBarMessages";
import { Name } from "../SimpleContainer/SimpleContainer";
import { ThemeContext, ThemeProps } from "../../contexts/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoomsRequest } from "../../_redux/actions/roomsActions/roomsActions";
import { RootState } from "../../_redux/reducers/rootReducer";

interface SidebarProps {
  setShowId : (roomId:number) => void,
  setCurrentName : ( id: number, name: string ) => void ,
  currentName : Name[],
  setCount : ( count : number ) => void,
  count : number ;
}


const SideBar : React.FC< SidebarProps > = ({ //extend to react.FC
  setShowId,
  setCurrentName,
  currentName,
  setCount,  //no arguments function || can type Void too
  count,
} : SidebarProps ) => {
  const dispatch = useDispatch();
  const { pending, rooms, error } = useSelector(
      ( state: RootState ) => state.rooms
  );

  React.useEffect(() => {
    dispatch( fetchRoomsRequest() );
  }, []);

  count = 0 ;
  const theme = useContext<ThemeProps>(ThemeContext);
  const [show, setShow] = useState< number >(0);
  const [name, setName] = useState<any>([]); //too much states REDUCE their usage. only for value maintenanace too much rendering

  currentName.map((data, index) => {
    const {name, id} = data ;
  });

  useEffect(() => {
    console.log(currentName[0]['id']);
    if (name.length > 0 ) {
      setCurrentName( currentName[0]['id'] + 1, name[0] );
      setCount(count + 1);
    }
  }, [name]);
  // const inputRef = React.useRef<HTMLInputElement>();
  const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  return (
    <div className={ theme.theme === 'dark' ? "Sidebar-Dark" :"Sidebar"}>
      <MainNavBar setName={setName} name={name} />
      <div className="form-container">
        <div className="input-container">
          {show === 0 ? (
            <button
              className="btnClick"
              onClick={() => {
                setShow(1);
                inputRef.current!.focus();
              }}
            >
              <SearchOutlinedIcon />
            </button>
          ) : show === 1 ? (
            <button
              className="btnClick"
              onClick={() => {
                setShow(0);
              }}
            >
              <ArrowBackOutlinedIcon className="custom-color" />
            </button>
          ) : (
            ""
          )}
          <input
            type="text"
            className="form-class"
            placeholder="Search or start a new chat"
            ref={inputRef}
            onClick={() => {
              setShow(1);
            }}
          />
        </div>
      </div>
      <Divider className="divider-side-bar" />
      <div className="messages-all">
        { pending ? (
            <div> Loading...</div>
        ) : error ? (
            <div> Error </div>
        ) : (
            rooms?.map((room, index) => (
                <div key={index}>
                  <SideBarMessages name={room.name} id={room.id} setShow={setShowId} key={index}/>
                  <Divider />
                </div>
            ))
          )}


        {/*{currentName.map((data, index) => {
			const {name, id} = data ;
          return (
            <div key={index}>
			{id > 0 &&
			<div>
              <SideBarMessages name={name} key={index} setShow={setShowId} id = {id}/>
              <Divider />
			  </div>
			}
            </div>
          );
        })}*/}
      </div>
    </div>
  );
};

export default SideBar;
