import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams} from 'react-router-dom';

function IssueDetail() {
    const params = useParams()
    const [issue, setIssue] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${params.number}`)
        .then(res => res.json())
        .then(data => {
            if (data.message === 'Not Found') return
            setIssue(data)
        })
    }, [params.number])

    if (!issue) return null

  return <div>
      <h3>Issue number: #{issue.number}, {issue.title}</h3>
      <p>{issue.body}</p>
      <div>{issue.created_at} by: {issue.user.login}</div>

  </div>;
}

export default IssueDetail;



//title (props.title)
//issue number (props.number)
//username (props.user.login)
//Date created (props.created_at)
//issue body/description (props.body)