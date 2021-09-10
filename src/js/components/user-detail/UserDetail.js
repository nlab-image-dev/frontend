import React, { Component, useState, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import Articlelist from "../articleoverview/Articlelist";

function UserDetail () {
  const username = useSelector((state) => state.userReducer.user.username);
  const [articles, setArticles] = useState([
    {
        warning:"サーバーからデータを取得できませんでした。",
        user:{ user_id: 0,username: "NULL" },
        tags: [],
        text: "",
        posted_time: 0,
    }
  ],);

  const getInfo = () => {
    const options = {
      params:{
          username: username,
      }
    }
    axios.get("https://nlab-image-dev.herokuapp.com/api/article/", options)
    .then((response) => {
      setArticles(JSON.parse(response.data).articles)
    })
    .catch((err) => {
      
    });
  }
  useEffect(() => {
    getInfo();
  },[]);
  
  return (
    <div>
      <h3>投稿した記事</h3>
      <div>
        username : {username}<br/>
        {articles.map((item,list) =>(
          <div key={list}>
            <Articlelist
              id = {item.id}
              title = {item.title}
              tags = {item.tags}
              author = {item.user.username}
              date = {new Date(item.posted_time*1000).toLocaleString()}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDetail;
