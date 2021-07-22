import { makeAutoObservable } from "mobx";

class LoaderStore {
  isLoading = false

  constructor() {
    makeAutoObservable(this)
  }

  setIsLoading() {
    this.isLoading = true
  }
}

export default new LoaderStore