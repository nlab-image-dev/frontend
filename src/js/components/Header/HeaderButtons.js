import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export default class HeaderButtons extends React.Component {
  render() {
    return (
      <div>
        <Button 
          variant="contained" color="primary" component={Link}
          to="/">
          トップ
        </Button>
        <Button 
          variant="contained" color="primary" component={Link}
          to="/newlinedelete">
          改行削除
        </Button>
        <Button 
          variant="contained" color="primary" component={Link}
          to="/login">
          ログイン/新規登録
        </Button>
        <Button 
          variant="contained" color="primary" component={Link}
          to="/user">
          ユーザー
        </Button>
        <Button 
					variant="contained" color="primary" component={Link}
					to="/submit">
					投稿
				</Button>
        <Button 
          variant="contained" color="primary" component={Link}
          to="/logout">
          ログアウト
        </Button>
      </div>
      
    );
  }
}