import React from 'react';
import { Link } from 'react-router-dom';

function UserCard(props) {
  if (!props.user) return

  const { name, login, avatar_url } = props.user

  return <div>
    <h3>{name}</h3>
    <h4><Link to={`/user-search/${login}`}>{login}</Link></h4>
    <img src={avatar_url} alt="" width="50px" />
  </div>;
}

export default UserCard;