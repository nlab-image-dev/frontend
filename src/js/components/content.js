import React, { Component, useEffect, useState } from 'react';
import { Form, Button, Container, Row, Alert } from 'react-bootstrap';
import axios from "axios";

function Content(){
    const [text,Settext] =useState("");
    const [title,Settitle] =useState("");
    const [tag,Settag] =useState([0]);
    const [name,Setname]=useState({user_id:1, username:'ota'});
    const [time,Settime] =useState(1);
    const [comment,Setcomment] = useState("");
    const [docomment,Setdocomment] = useState("");
    const [id,Setid] = useState(1);

    const config = {
        headers:{
            'Content-Type': "application/json"
        }
        };
    const data,data2 = {
        };

    useEffect(() => {
        axios.get("https://nlab-image-dev.herokuapp.com/api/article/", data, config)
        .then((response)=> {
            Settag(JSON.parse(response.data).tag);
            Settitle(JSON.parse(response.data).title);
            Settext(JSON.parse(response.data).text);
            Settime(JSON.parse(response.data).posted_time);
            Setname(JSON.parse(response.data).user.username);
            Setid(JSON.parse(response.data).id);
        }).catch(function (error) {
            console.log(error);//捕获异常数据
        })
    }, [])
    useEffect(() => {
        axios.get("https://nlab-image-dev.herokuapp.com/api/comment/"+id, data2, config)
        .then((response)=> {
            Setcomment(JSON.parse(response.data2).text);

        }).catch(function (error) {
            console.log(error);//捕获异常数据
        })
    }, [])

    return(
        <Container>
            <h1>Welcome</h1>
            <Form.Group controlId="title">
                <Form.Label>タイトル</Form.Label>
                <Form.Control
                type="title"
                value={title}
                />
            </Form.Group>
            <Form.Group controlId="text">
                <Form.Label>コメント欄</Form.Label>
                <Form.Control
                as="textarea" rows ={5}
                placeholder="論文内容を入力してください"
                onChange={(e) => { Setcomment(e.target.value) }}
                value={comment}
                />
            </Form.Group>
            <Button variant="danger" type="button" > コメントする </Button>
        </Container>
    )
}
export default Content;