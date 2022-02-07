import React from 'react';
import { Link } from 'react-router-dom';

function IssueCard(props) {
    // console.log(props)
    const {title, number, user, created_at} = props.issue

    if (!number) return null
    
    return <div className="issueCard"> 
            <h1> Issue number:<Link to ={`/issue-search/${number}`}> #{number}</Link>, {title}</h1>
        <div>{created_at} by: {user.login}</div>
    </div>;
}

export default IssueCard;
