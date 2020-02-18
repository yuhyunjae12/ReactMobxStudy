import CounterStore from "./CountStore";
import ApiStore from "./ApiStore";

class RootStore{
    constructor(){
        this.counter = new CounterStore(this);
        this.apiStore = new ApiStore(this);
    }
}

export default RootStore