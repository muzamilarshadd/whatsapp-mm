import * as React from 'react'
import  { useState } from 'react'
import './NewMessage.css'


function NewMessage({
    // handleNewMessageCancel = '',
    setName = ([]:any) => {},
    name = "",
    setShow=(xx:number)=>{}
}) 
  
{
    const [tempName, setTempName] = useState('')
    function handleNewMessageCancel(){
		//  e.preventDefault();
		setShow(0)
	}
    function handleCreate() {
        // alert('name')
        setName([tempName, ...name])
        console.log("Move it",tempName)
        handleNewMessageCancel()//check if it runs 
    }
    return (
        <div>
        <div className='new-message-dialog' onClick = {handleNewMessageCancel}>
            
        </div>
        <div className='msg-inner-div'>
        Create a new room
        <input className='input-div' type='text' onChange={e => setTempName(e.target.value)} required={true}/>
        <div className='button-div'>
        <button className='button-cancel-div' onClick = {handleNewMessageCancel}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"/></svg></button>
        <button className='button-create-div' onClick = {handleCreate}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/></svg></button>
        </div>
        </div>
        </div>
    )
}

export default NewMessage
