import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import { Divider } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeOutlinedIcon from '@material-ui/icons/DonutLargeOutlined';
import ChatIcon from '@material-ui/icons/Chat';
// import search_black_24dp from './icons'

const Styles = styled.div`

  .navbar { background-color: #ededed; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: black;
  }
  .navbar-brand {
    font-size: 1em;
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  
  }
  .side-bar-navigation {
    display: flex;
    justify-content: space-between;
    align-item: center;
    width: 385px;
  }
  .nav-icons {
    padding: 12px;
    background-color: unset;
    border: none;
  }
  .searchicon {
    border: unset;
    color: grey;

  }
  .searchicon:hover {
    color: red;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <div className='side-bar-navigation'>
      <div>
      <Navbar.Brand href="/">Whatsapp Clone</Navbar.Brand>
      </div>
      <div>
      <button className='nav-icons'>
      <DonutLargeOutlinedIcon />
      </button>
      <button className='nav-icons'>
      <ChatIcon />
      </button>
      <button className='nav-icons'>
      <MoreVertIcon />
      </button>

      </div>
      </div>

      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      {/*<Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>*/}
      <Divider orientation="vertical" flexItem />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <div className='right-nav-icons'>
            <button  className='searchicon'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg></button>
{/* 
          <Nav.Item><Nav.Link href="/"><SearchOutlinedIcon /></Nav.Link></Nav.Item>  */}
          <Nav.Item><Nav.Link href="/"><MoreVertIcon /></Nav.Link></Nav.Item>
          {/* <button  className='searchicon'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></button> */}
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)