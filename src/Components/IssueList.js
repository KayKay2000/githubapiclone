import React, { useState, Component, useEffect } from 'react'
import Issue from './Issue'

export default function IssueList() {
const [issues, setIssues] = useState([])
    let fetchIssues = () => {
    fetch('https://api.github.com/repos/facebook/create-react-app/issues')
    .then(res => res.json())
    .then(data => {
        setIssues(data)
    })
    }
    useEffect(()=>{
        fetchIssues()
    }, []);

    return (
    <div>
        
        {issues.map((issue, i) => {
            return (
            <Issue key={i} issue={issue}/>
            );
        })}
    </div>

    )
}

