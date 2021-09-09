import React, { Component } from "react";
import { render } from "react-dom";

class PageButton extends Component{
    constructor(props){
        super(props);
        this.setNext=this.setNext.bind(this);
        this.setUp=this.setUp.bind(this);
        this.state={
            num: 0,
            pagenum:this.props.current
        }
    }

    //次のページ
    setNext(){
        if(this.state.pagenum < this.props.totalPage){
            this.setState({
                num:this.state.num + this.props.pageSize,
                pagenum:this.state.pagenum + 1
            },function(){
                console.log(this.state)
                this.props.pageNext(this.state.num)
            })
        }
    }
    //前のページ
    setUp(){
        if(this.state.pagenum > 1){
            this.setState({
                num:this.state.num - this.props.pageSize,
                pagenum:this.state.pagenum - 1
            },function(){
                console.log(this.state)
                this.props.pageNext(this.state.num)
            })
        }
    }
    render(){
        return(
            <div>
                <span onClick={ this.setUp }>前のページ</span>
                <span>{ this.state.pagenum }ページ/ { this.props.totalPage }ページ</span>
                <span onClick={ this.setNext }>次のページ</span>
            </div>
        );
    }
}

export default PageButton;