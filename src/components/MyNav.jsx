import { Navbar, Nav,} from "react-bootstrap";
import {Component} from 'react'
class MyNav extends Component {
    render(){
    return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About </Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
  </Navbar>
    )}
}

export default MyNav