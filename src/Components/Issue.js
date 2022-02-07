import React, { useState, Component, useEffect } from 'react'
import RelativeDate from './RelativeDate';
import IssueList from './IssueList'
import styled from 'styled-components';
import '../App.css'


const Title = styled.div`
color: white;
font-weight: bold;
text-align: left;`
const Section = styled.div`
color: white;
border: solid 1px white;
text-align: left;
padding: 5px;`
const Details = styled.div`
font-size: 11px;`
const Container = styled.div`
padding-left: 100px;
padding-right:100px;
padding_top: 100px;
`

const Button = styled.button`
background-color: ${props => props.label ==='issue: bug report' ?  'rgb(54, 35, 13)' : props.label ==='needs triage' ? 'rgb(67, 35, 55)' : props.label ==='issue: proposal' ? 'rgb(54, 47, 13)' : 'rgb(15, 33, 53)'};
border: 1px solid ${props => props.label ==='issue: bug report' ?  'rgb(115, 64, 9)' : props.label ==='needs triage' ? 'rgb(115, 64, 9)' : props.label ==='issue: proposal' ? 'rgb(115, 94, 9)' : 'rgb(49, 152, 255)'};
border-radius: 10px;
color: ${props => props.label ==='issue: bug report' ?  'rgb(255, 132, 0)' : props.label ==='needs triage' ? 'rgb(245, 138, 170)' : props.label ==='issue: proposal' ? 'rgb(241, 193, 1)' : 'rgb(49, 152, 255)'};
font-weight: bold;`

export default function Issue(props){
    if (!props.issue){
        return null
    }

    return (
        <Container>
            {/* <h1>ISSUES</h1> */}
            <Section>
                <Title>
                    🟢 &nbsp; {props.issue.title} {props.issue.labels && props.issue.labels.map((label, i) => { return <Button key={i} label={label.name}>{label.name}</Button> })}
                </Title>
                <Details >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;#{props.issue.id} {props.issue.state} created at: {new Date(props.issue.created_at).toLocaleString()} (<RelativeDate date={props.issue.created_at}/>) by: {props.issue.user.login} comments: {props.issue.comments}</Details>
            </Section>
        </Container>

    )
}


