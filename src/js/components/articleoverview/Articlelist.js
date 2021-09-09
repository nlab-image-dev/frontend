import React,{Component} from "react";
import { ListGroup,Container } from "react-bootstrap";


class Articlelist extends Component{
    render() {
        const { title, author, tag, intro, date } = this.props;
        return(
            <Container fluid>
                <ListGroup>
                    <ListGroup.Item action href="#">
                        <div className="article-head">
                            <div className="article-title">{ title }</div>
                            <div className="article-tag">
                                <span>
                                    <span className="article-tag">{ tag }</span>
                                    <span className="article-tag">{ tag }</span>
                                    <span className="article-tag">{ tag }</span>
                                </span>
                            </div>
                        </div>
                        <div className="article-intro">
                            { intro }  This is an article's introduction!
                        </div>
                        <div className="article-author">
                            <span>{ author }</span><em>{ date }</em>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Container>
        );
    }
}

export default Articlelist;