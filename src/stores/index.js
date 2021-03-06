import CounterStore from "./CountStore";
import ApiStore from "./ApiStore";
import UsersStore from "./UsersStore";

// 스토어들을 RootStore로 관리
class RootStore{
    constructor(){
        this.counter = new CounterStore(this);
        this.apiStore = new ApiStore(this);
        this.usersStore = new UsersStore(this);
    }
}

export default RootStore