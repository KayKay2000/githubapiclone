import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserCard from '../Components/UserCard';

function UserSearch() {
  //searching by username
  const [username, setUsername] = useState('')
  const [users, setUsers] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => {
        if (data.message === 'Not Found') return
        setUsers([data, ...users])
        setUsername('')
      })
  }
  
  return <div>
    <h1>User Search</h1>
    <form onSubmit={handleSubmit}>
      <label>Username:
        <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
      </label>
      <button type="submit">Add</button>
    </form>
    
    { users.map(user => <UserCard key={user.id} user={user} />)}

  </div>;
}

export default UserSearch;