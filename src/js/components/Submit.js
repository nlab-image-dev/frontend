import React, { Component, useState } from 'react';
import axios from "axios";
import Header from "./Header";
import { paperSubmit } from '../actions/submitAction';
import { useDispatch, useSelector } from "react-redux";

import { Form, Button, Container, Row, Alert } from 'react-bootstrap';



function Submit(){
    const [text,Settext] =useState("");
    const [title,Settitle] =useState("");
    const [tag_id,Settag_id] =useState("");
    const [message,Setmessage]=useState('Welcome')

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);

    const user = useSelector((state) => state.userReducer.user);
    console.log(user.token)
    console.log(user.username)
    const config = {
        headers:{
            'Content-Type': "application/json"
        }
        };
    const data = {
        // tag_id: tag_id,
        };

    axios.get("https://nlab-image-dev.herokuapp.com/api/tag/", data, config)
    .then((response)=> {
        console.log(response.data);
        Settag_id(JSON.parse(response.data).tags
        )}).catch(function (error) {
        console.log(error);//捕获异常数据
    })

    const click = () => {
        paperSubmit(title,text,tag_id)
    }

    return  (
        <div className="Submit">

            <Form>

                <Header />
                <p>{message}</p>
                    <Form.Group controlId="title">
                        <Form.Label>タグを選んでください</Form.Label>
                        <Button variant="primary" type="button" onClick={click}> tag_id[0].name </Button>
                        <Button variant="primary" type="button" onClick={click}> tag_id[1].name </Button>
                    </Form.Group>
                    <Form.Group controlId="title">
                        <Form.Label>タイトル</Form.Label>
                        <Form.Control
                        type="title"
                        placeholder="タイトルを入力してください"
                        onChange={(e) => { Settitle(e.target.value) }}
                        value={title}
                        />
                    </Form.Group>
                    <Form.Group controlId="text">
                        <Form.Label>論文内容</Form.Label>
                        <Form.Control
                        as="textarea" rows ={5}
                        placeholder="論文内容を入力してください"
                        onChange={(e) => { Settext(e.target.value) }}
                        value={text}
                        />
                    </Form.Group>

                
                <Button variant="primary" type="button" onClick={click}> 投稿する </Button>

            </Form>
            {/* </Container> */}
        </div>
    );
}
export default Submit;