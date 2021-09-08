import React, { Component, useState } from 'react';
import { Form, Button, Container, Row, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { LoginUser } from '../../actions/userAction';


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
	const click = () => {
		dispatch(LoginUser(username, password));
		history.push('/list1');
	}

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