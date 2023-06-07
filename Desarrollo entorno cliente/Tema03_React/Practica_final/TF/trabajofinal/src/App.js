import Home from './components/Home';
import Login from './components/Login';
import SignUp  from './components/SignUp';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route } from "react-router-dom";
import Movies from './components/Movies';


function App() {
 

  return (
    <div>
     <Navbar collapseOnSelect expand="false" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">MovieCenter</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Movies">Movies</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="Login" element={<Login/>}></Route>
      <Route path="SignUp" element={<SignUp/>}></Route>
      <Route path="Movies" element={<Movies/>}></Route>

    </Routes>
    </div>

  
  );
  
}

export default App;
