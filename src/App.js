import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Read from './components/read';
import Create from './components/create';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import { Navbar, Nav } from 'react-bootstrap';
import{
  BrowserRouter as  Router,
  Switch,
  Route
}from "react-router-dom";
import Movies from './components/movies';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Navbar bg="primary" variant="dark">
          
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/header">Header</Nav.Link>
              <Nav.Link href="/content">Contents</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
            </Nav>
          
        </Navbar>

        <Switch>
          <Route path="/read"><Read/></Route>
          <Route path="/create"><Create/></Route>
        </Switch>
        
      </div>
      </Router>
    );
  }
}


export default App;

