import { observable, action, computed } from "mobx";

export default class UsersStore{

    @observable.ref user={};
    @observable auth = false;

    constructor(root){
        this.root= root
    }

    @action
    setLoginAuth =(result) =>{
        this.auth = result
    }

    @action
    login = () =>{
        this.setLoginAuth(true);
    }

    @action
    logOut = () =>{
        this.setLoginAuth(false);
    }

    @computed
    get getUserAuth (){
        return this.auth;
    }

}