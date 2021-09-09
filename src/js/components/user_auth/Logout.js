import React, { useEffect  } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch　} from "react-redux";

function Logout () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: "LOGOUT"});
  });
  return (
    <Container className="center">
      <Row className="justify-content-md-center">
        <div>
          <h2>ログアウトしました</h2>
          <div className="text-center">
            <Link to="/login">ログイン画面へ</Link>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Logout;