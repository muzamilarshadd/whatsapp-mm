import React, {useState} from 'react'
import './MainNavBar.css'
import './NewMessage'
import NewMessage from './NewMessage';

function MainNavBar({
	setName,
	name
}) {
	const [show, setShow] = useState(0)
	function handleOnClick(e){
		e.preventDefault();
		alert("You clicked on your Display Picture")
	}

	function handleStatus(e){
		e.preventDefault();
		alert("Status Functionality not added")

	}

	function handleNewMessage(e){
		// e.preventDefault();
		setShow(1)
	}
	function handleNewMessageCancel(e){
		// e.preventDefault();
		setShow(0)
	}

	function handleNewMessageCreate(e){
		
	}
	return (
		<div className='main-nav-bar'>
			{/* <input type="file" /> */}
			
			<button className='display-pic-button' onClick={handleOnClick}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10.25 13c0 .69-.56 1.25-1.25 1.25S7.75 13.69 7.75 13s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zM15 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44C6.37 6 5.05 7.58 4.42 9.47zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24-3.13 0-5.92-1.44-7.76-3.69C8.69 8.87 6.6 10.88 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z"/></svg></button>
			<div>
			<button className='status-button' onClick={handleStatus}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000" color="grey"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M13 5.08c3.06.44 5.48 2.86 5.92 5.92h3.03c-.47-4.72-4.23-8.48-8.95-8.95v3.03zM18.92 13c-.44 3.06-2.86 5.48-5.92 5.92v3.03c4.72-.47 8.48-4.23 8.95-8.95h-3.03zM11 18.92c-3.39-.49-6-3.4-6-6.92s2.61-6.43 6-6.92V2.05c-5.05.5-9 4.76-9 9.95 0 5.19 3.95 9.45 9 9.95v-3.03z"/></svg></button>
			<button className='new-msg-button' onClick={handleNewMessage}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 4v13.17L18.83 16H4V4h16m0-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 10H6v2h12v-2zm0-3H6v2h12V9zm0-3H6v2h12V6z"/></svg></button>
			<button className='menu-three-dot'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg></button>
			</div>
			{show===1 ? 
			<NewMessage handleNewMessageCancel={handleNewMessageCancel} setName={setName} name = {name}/>
		// 	<div>
		// 	<div className='new-message-dialog'>
        //     Create a new room
        //     <input type='text' />
        //     <button onClick={()=>{
		// 		setShow(0)
		// 	}}>Cancel</button>
        //     <button>Create</button>
        // </div></div>
		:''}
		</div>
	)
}

export default MainNavBar