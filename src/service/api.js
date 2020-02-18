import Axios from "axios";

export function getTitle(){
    return Axios.get('https://jsonplaceholder.typicode.com/posts/1');
}