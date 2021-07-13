import * as React from 'react'
import './MessagesDisplay.css'

function MessagesDisplay({
    message = []
}) {
    let tempMsgg =  message.reverse()
    return (
        <div className='messages-display'>
            {tempMsgg.map((msgg, index)=>{
                return (
                    <div className={msgg[0]===':' ? 'outer-div left-chat' : 'outer-div right-chat'}>
                    <p className= {msgg[0] === ':' ? 'text text-align-left':'text text-align-right'}
                    >{msgg}</p>
                    </div>
                )
            })
        }
        </div>
    )
}

export default MessagesDisplay
