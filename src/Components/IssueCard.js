import React from 'react';
import { Link } from 'react-router-dom';

function IssueCard(props) {
    
    const {title, number, created_at} = props

    if (!number) return
    
    return <div> 
            <h1> Issue number:<Link to ={`/issue-search/${number}`}> #{number}</Link>, {title}</h1>
      <div>{created_at} by: {props.user.login}</div>
    </div>;
}

export default IssueCard;
