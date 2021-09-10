import React,{Component} from "react";
import { ListGroup,Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class Articlelist extends Component{
    render() {
        const { id, title, author, tags, date } = this.props;
        return(
            <Container fluid>
                <ListGroup>
                <Link to={"/article?id="+id}>
                    <ListGroup.Item action>
                            <div className="article-head">
                                <div className="article-title">{ title }</div>
                                <div className="article-tag">
                                    <span>
                                        {tags.map((tag, idx) => {
                                            return(
                                                <span className="article-tag" key={idx}>{ tag.tag_name }</span>
                                            )
                                        })}
                                    </span>
                                </div>
                            </div>
                            <div className="article-author">
                                <span>{ author }</span><em>{ date }</em>
                            </div>
                    </ListGroup.Item>
                    </Link>
                </ListGroup>
            </Container>
        );
    }
}

export default Articlelist;