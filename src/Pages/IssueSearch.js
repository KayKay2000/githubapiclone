import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import IssueCard from '../Components/IssueCard';
// import IssueDetail from './IssueDetail';
import styled from 'styled-components';


const Body = styled.div`
display:flex;
justify-content: center;`

function IssueSearch() {
  //issue is for issue number
  const [issue, setIssue] = useState('')
  const [issueLists, setIssueList] = useState([])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${issue}`)
      .then(res => res.json())
      .then(data => {
        if (data.message === 'Not Found') return
        setIssueList([data, ...issueLists])
        setIssue('')
      })
  }
  return <div className="issue">
    <h1>Search for Issues Below</h1>
    <form onSubmit={handleSubmit}>
      <label>Issue:
      <input type="number" onChange={(e) => setIssue(e.target.value)} value={issue} />
      </label>
      <button type="submit">Add</button>
    </form>
    {issueLists.map(issueList => <IssueCard key={issueList.number} issue={issueList} />)}
  </div>;

}

export default IssueSearch;
