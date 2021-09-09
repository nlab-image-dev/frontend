import React, { Component } from "react";
import { Container, Pagination } from "react-bootstrap";
import Articlelist from "./Articlelist";
import PageButton from "./PageButton";

class Articleoverview extends Component{
    constructor(props){
        super(props);
        // this.pageNext = this.pageNext.bind(this);
        // this.setPage = this.setPage.bind(this);
        this.state = {
            Article:[
                {
                    title:"サーバーからデータを取得できませんでした。"
                }
            ],
            // indexList:[],//今render中のページ
            // totalData:3,
            // current: 1, //今表示しているページ
            // pageSize:5, //毎ページ表示できる項目
            // goValue:0,  //ページを指定
            // totalPage:0,//総ページ数
        }
    }
    //サーバーから記事のデータを取得
    componentDidMount(){
        let t = this;
        fetch("http://localhost:3003/articles", {method: 'GET'}).then(
            function (res) {
                console.log(res);
                res.json().then(function (articles) {
                        console.log(articles);
                        t.setState({
                            Article:articles
                        });
                    }
                )
            });
        };
    //ページ分けと表示
    // componentDidMount(){
    //     var _this = this;
    //     this.setPage({
    //         totalPage:Math.ceil(this.state.totalData.length/this.state.pageSize)
    //     })
    // }
    // pageNext(num){
    //     this.setState({
    //         indexList:this.state.totalData.slice(num,num+this.state.pageSize)
    //     })
    // }
    // pageNext (num){
    //     this.setPage(num)
    // }
    //frontに記事データを返す
    render(){
        return(
            <div>
                <br/>
                {this.state.Article.map((item,list) =>
                    <div key={list}>
                    <Articlelist
                        title = {item.title}
                        author = {item.author}
                        tag = {item.tag}
                        intro = {item.intro}
                        date = {item.date}
                    />
                </div>
                )}
                {/* <PageButton { ...this.state } pageNext={this.pageNext} /> */}
                <Container>
                <Pagination className="text-center">
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
                </Container>
            </div>
        );
    }
}

export default Articleoverview;