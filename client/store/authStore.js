import {makeAutoObservable} from "mobx";

class AuthStore {
  isAuth = false
  constructor() {
    makeAutoObservable(this)
  }

  checkToken() {
    if(localStorage.getItem("token")) {
      this.isAuth = true
    }
  }

  authenticate() {
    this.isAuth = true
    console.log(this.isAuth)
  }
}

export default new AuthStore