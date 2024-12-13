import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import { CiShoppingBasket } from "react-icons/ci";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
export class Header extends Component {
    state={};
    render(){
        return<>
            <Navbar expand="lg" className=" mb-4" bg={this.props.isDarkMode ? 'dark' : 'light'}variant={this.props.isDarkMode ? 'dark' : 'light'}>
        <Container>
        <Navbar.Brand href="#home">Store</Navbar.Brand>
        <Form className="d-flex gap-2">
        {this.props.copyProducts.map((product) => (
            <Button key={product.id} onClick={() => this.props.addProduct(product)} variant="btn btn-outline-secondary">{product.name}</Button>
            ))}
          </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <div className="">
                <Nav.Link href="#link" className="d-flex gap-2">
                    <CiShoppingBasket className=" mt-1"/>
                    <span>{this.props.numOfProduct}</span>
                </Nav.Link>
            </div>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
        </>
    }
}