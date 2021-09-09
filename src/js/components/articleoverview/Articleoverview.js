import React, { Component } from "react";
import Articlelist from "./Articlelist";
import PageButton from "./PageButton";

class Articleoverview extends Component{
    constructor(props){
        super(props);
        // this.pageNext=this.pageNext.bind(this);
        // this.setPage=this.setPage.bind(this);
        this.state = {
            Article:[
                {
                    title:"サーバーからデータを取得できませんでした。",
                    user:{ user_ID: 0,username: "NULL" },
                    tags: [],
                    text: "",
                    posted_time: 0,
                }
            ],
            current: 1, //今表示しているページ
            pageSize:5, //毎ページ表示できる項目
            goValue:0,  //指定のページにジャンプ
            totalPage:0,//総ページ数
        }
    }
    //サーバーから記事のデータを取得
    componentDidMount(){
        let t = this;
        fetch("https://nlab-image-dev.herokuapp.com/api/article", {method: 'GET'})
        .then(
            function (res) {
                console.log(res);
                res.json().then(function (data) {
                        console.log(JSON.parse(data).articles);
                        t.setState({
                            Article:JSON.parse(data).articles
                        });
                    }
                )
            }
        );
    };
    componentDidUpdate(){
        if(this.state.totalPage !== Math.ceil(this.state.Article.length/this.state.pageSize)){
            this.setState({
                totalPage:Math.ceil(this.state.Article.length/this.state.pageSize)
            })
            // this.pageNext(this.state.goValue)
        }
    }
    //ページ分けと表示
    // setPage(num){
    //     this.setState({
    //         Article:this.state.Article.slice(num,num+this.state.pageSize)
    //     })
    // }
    // pageNext (num) {
    //     this.setPage(num)
    // }
    //frontに記事データを返す
    render(){
        return(
            <div>
                <br/>
                {this.state.Article.map((item,list) =>(
                    <div key={list}>
                    <Articlelist
                        title = {item.title}
                        tags = {item.tags}
                        author = {item.user.username}
                        intro = {item.text}
                        date = {Date(item.posted_time)}
                    />
                </div>
                ))}
                <PageButton { ...this.state } pageNext={this.pageNext} />
            </div>
        );
    }
}

export default Articleoverview;