import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import MainNavBar from "./MainNavBar";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import { Divider } from "@material-ui/core";
import SideBarMessages from "./SideBarMessages";

function SideBar({
  setShowId = "",
  setCurrentName = "",
  currentName = "",
  setCount = "",
  count = 0,
}) {
  const [show, setShow] = useState(0);
  const [name, setName] = useState([]);

  useEffect(() => {
    if (name.length > 0 ) {
      setCurrentName([
        {
          name: name[0],
          id: currentName[0].id + 1,
        },
        ...currentName,
      ]);
      setCount(count + 1);
    }
  }, [name]);
  const inputRef = useRef();
  return (
    <div className="Sidebar">
      <MainNavBar setName={setName} name={name} />
      <div className="form-container">
        <div className="input-container">
          {show === 0 ? (
            <button
              className="btnClick"
              onClick={() => {
                setShow(1);
                inputRef.current.focus();
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
        {currentName.map((data, index) => {
			const {name, id} = data
          return (
            <>
			{id > 0 &&
			<>
              <SideBarMessages name={name} key={index} setShow={setShowId} id = {id}/>
              <Divider />
			  </>
			}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
