import React from 'react'

export default function CustomerView({customers}) {
    return(
        <div>
            <h3>Customer List</h3>
            <ul style={{listStyle:'none'}} >
                {customers.map((cust) => <li>{cust}</li>)}
            </ul>
        </div>
    )
}