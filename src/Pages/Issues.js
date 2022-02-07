import React from 'react';
import IssueList from '../Components/IssueList';
import styled from 'styled-components';



const Title = styled.h1`
display:flex;
justify-content: center;`


function Issues() {

  return <div>
      <Title>ISSUES</Title>
      <IssueList />
  </div>;
}

export default Issues;
