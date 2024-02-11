import { useState } from "react";


const Message = (propsAtribute) => {
    const [message, setMessage] = useState('welcome visitor')
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => setMessage('Thankyou for subscribing')}>Subscribe</button>
        </div>
        )
}

export default Message;