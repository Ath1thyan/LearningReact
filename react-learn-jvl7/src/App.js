// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { Button, EditableText, InputGroup, Toaster } from '@blueprintjs/core';


const AppToaster = Toaster.create({
  position: 'top-right'
})



function App() {

  const [users, setUsers] = useState([]);

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newWebsite, setNewWebsite] = useState("");

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( (response) => response.json() )
    .then( (json) => setUsers(json) )
  },[] )



  function addUser() {
    const name = newName.trim();
    const email = newEmail.trim();
    const website = newWebsite.trim();

    if (name && email && website) {
      fetch("https://jsonplaceholder.typicode.com/users",
        {
          method : "POST",
          body : JSON.stringify({
            name,
            email,
            website
          }),
          headers : {
            "Content-Type" : "application/json; charset=UTF-8 "
          }
        }
      )
      .then( (response) => response.json() )
      .then( (data) => {
        setUsers([...users, data]);
        AppToaster.show({
          message : "New user added successfully",
          intent : "success",
          timeout : 3000
        })
        setNewName("");
        setNewEmail("");
        setNewWebsite("");
      })
    }

  }


  function onChangeHandler(id, key, value) {
    setUsers( (users) => {
      return users.map( usr => {
        return usr.id === id ? { ...usr, [key] : value } : usr;
      })
    } )
  }

  function updateUser(id) {
    const user = users.find( usr => usr.id === id)

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method : "PUT",
          body : JSON.stringify(user),
          headers : {
            "Content-Type" : "application/json; charset=UTF-8 "
          }
        }
      )
      .then( (response) => response.json() )
      .then( (data) => {
        AppToaster.show({
          message : "User updated successfully",
          intent : "success",
          timeout : 3000
        })
      })
  }


  function deleteUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method : "DELETE",
        }
      )
      .then( (response) => response.json() )
      .then( (data) => {
        setUsers ( (users) => {
          return users.filter(user => user.id !== id)
        } )

        AppToaster.show({
          message : "User deleted successfully",
          intent : "success",
          timeout : 3000
        })
      })
  }



  return (
    <div className="App">
      <table className='bp4-html-table modifier'>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Website</th>
          <th>Action</th>
        </thead>

        <tbody>
          {users.map( usr => 
            <tr key={usr.id}>
              <td>{usr.id}</td>
              <td>{usr.name}</td>
              <td><EditableText onChange={value => onChangeHandler(usr.id, 'email', value)} value={usr.email} /></td>
              <td><EditableText onChange={value => onChangeHandler(usr.id, 'website', value)} value={usr.website} /></td>
              <td>
                <Button intent='primary' onClick={ () => updateUser(usr.id) } >Update</Button> 
                &nbsp; &nbsp;
                <Button intent='danger' onClick={ () => deleteUser(usr.id) } >Delete</Button>
              </td>
            </tr>
          )}
        </tbody>

        <tfoot>
          <tr>
            <td></td>
            <td> 
              <InputGroup value={newName} 
                onChange={ (e) => {setNewName(e.target.value)} }
                placeholder="Enter new name"
              /> 
            </td>
            <td> 
              <InputGroup value={newEmail} 
                onChange={ (e) => {setNewEmail(e.target.value)} }
                placeholder="Enter new email"
              /> 
            </td>
            <td> 
              <InputGroup value={newWebsite} 
                onChange={ (e) => {setNewWebsite(e.target.value)} }
                placeholder="Enter new website"
              /> 
            </td>
            <td>
              <Button intent='success' onClick={addUser}>Add User</Button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default App;
