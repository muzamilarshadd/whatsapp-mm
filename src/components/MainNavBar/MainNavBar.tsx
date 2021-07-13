import * as React  from 'react'
import { useState } from 'react'
import './MainNavBar.css'
import '../NewMessage/NewMessage'
import NewMessage from '../NewMessage/NewMessage'
// import { ReactComponent as DisplayPicture} from '../icons/ic_face.svg'


function MainNavBar({
	setName = (cc:any) => {},
	name=''
}) {
	const [show, setShow] = useState(0)
	function handleOnClick(e:any){
		e.preventDefault();
		alert("You clicked on your Display Picture")
	}

	function handleStatus(e:any){
		e.preventDefault();
		alert("Status Functionality not added")

	}

	function handleNewMessage(e:any){
		// e.preventDefault();
		setShow(1)
	}
	function handleNewMessageCancel(e:string){
		// e.preventDefault();
		setShow(0)
	}

	function handleNewMessageCreate(e:any){
		
	}
	return (
		<div className='main-nav-bar'>
			{/* <input type="file" /> */}
			
			<button className='display-pic-button' onClick={handleOnClick}>Display Pic</button>
			<div>
			<button className='status-button' onClick={handleStatus}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000" color="grey"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M13 5.08c3.06.44 5.48 2.86 5.92 5.92h3.03c-.47-4.72-4.23-8.48-8.95-8.95v3.03zM18.92 13c-.44 3.06-2.86 5.48-5.92 5.92v3.03c4.72-.47 8.48-4.23 8.95-8.95h-3.03zM11 18.92c-3.39-.49-6-3.4-6-6.92s2.61-6.43 6-6.92V2.05c-5.05.5-9 4.76-9 9.95 0 5.19 3.95 9.45 9 9.95v-3.03z"/></svg></button>
			<button className='new-msg-button' onClick={handleNewMessage}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 4v13.17L18.83 16H4V4h16m0-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 10H6v2h12v-2zm0-3H6v2h12V9zm0-3H6v2h12V6z"/></svg></button>
			<button className='menu-three-dot'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg></button>
			</div>
			{show===1 ? 
			<NewMessage /*handleNewMessageCancel={handleNewMessageCancel}*/setShow={setShow} setName={setName} name = {name}/>
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