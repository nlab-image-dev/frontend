import React,{Component} from "react";
import {  Nav, Navbar, NavDropdown } from "react-bootstrap";

class Header extends Component{
    render(){
        const { userName } = this.props;
        return(
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#">記事一覧</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">記事投稿</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Welcome : <NavDropdown title="DummyUser" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">ログアウト</NavDropdown.Item>
                            </NavDropdown>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;