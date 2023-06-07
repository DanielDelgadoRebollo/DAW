import './App.css';
import Home from "./components/Home";
import Inventory from "./components/inventory"
import Search from './components/Search';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route } from "react-router-dom";




function App() {

  

 

  return (
    <div>
    <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Inventory">Catalogo</Nav.Link>
            <Nav.Link href="/Search">Search</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="Inventory" element={<Inventory />} />
      <Route path="Search" element={<Search />}></Route>
    </Routes>
    </div>
  
  );
}

export default App;

