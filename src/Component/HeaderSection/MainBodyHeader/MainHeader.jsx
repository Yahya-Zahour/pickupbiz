import React from 'react';
import { Jumbotron,Navber,Nav,Form,FormControl,Button } from 'react-bootstrap';

export const MainHeader = () => {
    return (
        <div>
            <Jumbotron>
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
            </Jumbotron>
            
        </div>
    );
}