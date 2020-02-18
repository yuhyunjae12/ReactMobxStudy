import { observable, action, computed } from "mobx";
import Axios from "axios";

export default class ApiStore{

    @observable.ref users = [];
    @observable.ref userInfo =[];

    constructor(root){
        this.root=root;
    }

    @action setResult = (users) =>{ this.users = users }

    @action setUserInfo = (user) =>{ this.userInfo = user }

    @action
    call =() =>{
        Axios.get('http://jsonplaceholder.typicode.com/users/')
        .then(res =>{
            this.setResult(res.data);
        });
    }

    @action
    callOne =(no) =>{
        Axios.get('http://jsonplaceholder.typicode.com/users/' + no)
        .then(res =>{
            console.log(res.data)
            this.setUserInfo(res.data)
        })
    }

    @computed 
    get getUsers(){
        return this.users;
    }

    @computed
    get getUserInfo(){
        return this.userInfo;
    }

}