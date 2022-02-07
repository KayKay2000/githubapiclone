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


function App() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/hello')
  }
  return (
      <div className='app'>
        <nav>
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/issues-list">Issue List</Link></li>
          <li><Link to="/issue-search">Issue Search</Link></li>
          <li><Link to="/user-search">User Search</Link></li>
          </ul>
        </nav>
        {/* <button onClick={handleClick}>Go HOME!</button> */} 
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/issues-list" element={<Issues />} />
        <Route path="/issue-search" element={ <IssueSearch />} />
        <Route path="/user-search" element={<UserSearch/>} />
        <Route path="/user-search/:username" element={<UserProfile />} />
        <Route path="*" element={<NotFound/>} />

      </Routes>
      </div>
  );
}

export default App;
