import React, { Component, useEffect, useState } from 'react';
import { Form, Button, Container, Row, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Content(){
    const[total,Settotal]=useState({message:"", articles:[]});

    const [text,Settext] =useState("222");
    const [title,Settitle] =useState("111");
    const [tag,Settag] =useState({tag_id:1, tag_name:'ota'});
    const [name,Setname]=useState({user_id:1, username:'ota'});
    const [time,Settime] =useState(1);
    const [id,Setid] = useState(1);
    const [docomment,Setdocomment] = useState("");

    const [comment,Setcomment] = useState("");
    const [cid,Setcid] = useState(1);
    const [cname,Setcname]=useState({user_id:1, username:'ota'});
    const [ctime,Setctime]=useState(1);

    const user = useSelector((state) => state.userReducer.user);
    console.log(user.token)
    console.log(user.username)

    const config = {
        headers:{
            'Content-Type': "application/json"
        }
        };
    const data = {
        };
    const data2 = {
        };
  
    useEffect(() => {
        axios.get("https://nlab-image-dev.herokuapp.com/api/article/", data, config)
        .then((response)=> {
            Settotal(JSON.parse(response.data))
            console.log(JSON.parse(response.data));
            // Settag(JSON.parse(response.data).tag);
            // Settitle(JSON.parse(response.data).title);
            // Settext(JSON.parse(response.data).text);
            // Settime(JSON.parse(response.data).posted_time);
            // Setname(JSON.parse(response.data).user.username);
            // Setid(JSON.parse(response.data).id)
        }).catch(function (error) {
            console.log(error);//捕获异常数据
        })
    }, [])
    useEffect(() => {
        axios.get("https://nlab-image-dev.herokuapp.com/api/comment/"+id, data2, config)
        .then((response)=> {
            Setcomment(JSON.parse(response.data2).text);
            Setcid(JSON.parse(response.data2).id);
            // Setcname(JSON.parse(response.data2).user.username);
            Setctime(JSON.parse(response.data2).posted_time);
        }).catch(function (error) {
            console.log(error);//捕获异常数据
        })
    }, [])

    const click = (docomment) => {
        return function() {
        const config = {
            headers:{
                'Content-Type': "application/json",
                'Authorization' : "JWT "+user.token
            }};
        const datapost = {
            text: docomment
        }
        axios.post("https://nlab-image-dev.herokuapp.com/api/comment/"+id, datapost, config)
        .then((response) => {})
        .catch(function (error) {
            console.log(error.response)
          });
        }
    };

    return(
        <Container>
            <h1>Welcome</h1>
            <Form.Group controlId="title">
                <Form.Label>タイトル</Form.Label><br/>
                <span>
                    {title}
                </span>
            </Form.Group>

            <Form.Group controlId="text">
                <Form.Label>論文内容</Form.Label><br/>
                
                    {
                    total.articles.map((te,idx)=>{
                        return(
                            <span>
                                {te.text}<br/>
                            </span>
                        )
                    }

                    )
                    } 
                
            </Form.Group>

            <Form.Group controlId="comment">
                <Form.Label>コメント一覧</Form.Label><br/>
                <span>
                    {comment}
                </span>
            </Form.Group>

            <Form.Group controlId="docomment">
                <Form.Label>コメント欄</Form.Label>
                <Form.Control
                as="textarea" rows ={5}
                onChange={(e) => { Setdocomment(e.target.value) }}
                value={docomment}
                />
            </Form.Group>
            <Button variant="danger" type="button" onClick={click(docomment)}> コメントする </Button>
        </Container>
    )
}
export default Content;