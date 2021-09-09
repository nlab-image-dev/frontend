import React,{Component} from "react";
import { Navbar } from "react-bootstrap";

class Header extends Component{
    render(){
        return(
            <div>
                <Navbar expand="lg">
                    <Navbar.Brand href="#">記事一覧</Navbar.Brand>
                </Navbar>
            </div>
        );
    }
}

export default Header;