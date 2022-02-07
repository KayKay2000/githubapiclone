// import IssueList from './Components/IssueList';
import UserSearch from './Pages/UserSearch';
import IssueSearch from './Pages/IssueSearch';
import UserProfile from './Pages/UserProfile';
import Home from './Pages/Home';
import Issue from './Components/Issue';
import Issues from './Pages/Issues';
import './App.css';
import { BrowserRouter as Router, 
        Routes, 
        Route,
        Link, 
        useNavigate
      } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import IssueDetail from './Pages/IssueDetail';
import styled from 'styled-components';

const Body = styled.div`
display:flex;
flex-direction: column`

function App() {
  // const navigate = useNavigate()

  // const handleClick = () => {
  //   navigate('/hello')
  // }
  return (
      <Body>
        <nav>
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/issues-list">Issue List</Link></li>
          <li><Link to="/issue-search">Issue Search</Link></li>
          <li><Link to="/user-search">User Search</Link></li>
          </ul>
        </nav>
        {/* <button onClick={handleClick}>Go HOME!</button> */} 
        <div>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/issues-list" element={<Issues />} />
        <Route path="/issue-search" element={ <IssueSearch />} />
        <Route path="/issue-search/:issue" element={<IssueDetail />} />
        <Route path="/user-search" element={<UserSearch/>} />
        <Route path="/user-search/:username" element={<UserProfile />} />
        <Route path="*" element={<NotFound/>} />

      </Routes>
      </div>
      </Body>
  );
}

export default App;
