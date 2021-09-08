import React, { Component, useState, useEffect } from 'react';
import { Form, Button, Container, Row, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { LoginUser, CreateUser } from '../../actions/userAction';


function Login () {
	const [registUser, setRegistUser] = useState(false);
	const	registUserChange = () =>{
		setRegistUser(() => !registUser);
	};
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	
	const isRegist = (registUser ? '新規登録' : 'ログイン');
	const ReverseisRegist = (registUser ? 'ログイン' : '新規登録');

	const dispatch = useDispatch();
	const history = useHistory();
  const fetched = useSelector((state) => state.userReducer.fetched);

	const click = () => {
    if(registUser){
      dispatch(CreateUser(username, password));
    }
		dispatch(LoginUser(username, password));
	}

  useEffect(() => {
    if(fetched){
      history.push('/list1');
    }
  },[fetched])
  
  return (
    <Container className="center">
      <Row className="justify-content-md-center">
        <Form>
          <p>
            <b>{isRegist}</b>
						<Button variant="primary" type="button" onClick={registUserChange}>
							{ReverseisRegist}はこちら
          	</Button>
          </p>
          <Form.Group controlId="email">
            <Form.Label>メールアドレス</Form.Label>
            <Form.Control
              type="email"
              placeholder="メールアドレスを入力してください"
              onChange={(e) => { setUsername(e.target.value) }}
              value={username}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>パスワード</Form.Label>
            <Form.Control
              type="password"
              placeholder="パスワードを入力してください"
              onChange={(e) => { setPassword(e.target.value) }}
              value={password}
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={click}>
            {isRegist}
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default Login;