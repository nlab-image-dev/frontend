import axios from 'axios';

class User {
    isLoggedIn = () => this.get('isLoggedIn') === 'true';
  
    set = (key, value) => localStorage.setItem(key, value);
  
    get = key => this.getLocalStorage(key);
  
    getLocalStorage = key => {
      const ret = localStorage.getItem(key);
      if (ret) {
        return ret;
      }
      return null;
    };
  
    login = async (email, password) => {
      const user = {
        name: email,
        password: password
      };

      // ログイン処理
      // ログインエラー時には、falseを返してもいいし、returnを別の用途で利用したかったら
      // 例外を出しして呼び出し元でcatchしてもいいかと思います。
      axios.get("http://localhost:18080", {user})
      .then((response) => {
        // 返ってきたJsonを見てログインの可否を判断

      })
      .catch((err) => {
        // return false;
      });
  
      this.set('isLoggedIn', true);
  
      return true;
    };
  
    logout = async () => {
      if (this.isLoggedIn()) {
        this.set('isLoggedIn', false);
  
        // ログアウト処理
        //　他に必要な処理があるのならこちら
  
      }
    };
  }
  
  export default new User();