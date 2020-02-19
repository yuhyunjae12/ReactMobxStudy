import { observable, action, computed } from "mobx";
import Axios from "axios";

export default class ApiStore{

    // json값은 @observable users =[] 로 선언 하면 메모리 낭비가 생긴다하여 .ref를 선언 하였습니다.
    // 자세한 정리 https://rannte.tistory.com/entry/react-native-mobx-action-observable
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