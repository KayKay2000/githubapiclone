import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function UserProfile() {
  const params = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${params.username}`)
      .then(res => res.json())
      .then(data => {
        if (data.message === 'Not Found') return
        setUser(data)
      })
  }, [params.username])

  if (!user) return null

  return <div>
    <h1>{user.name} ({user.login})</h1>
    <img src={user.avatar_url} alt={`Avatar for github user ${user.login}`} />
  </div>;
}

export default UserProfile;