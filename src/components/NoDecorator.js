import React, { Component } from 'react'
import { decorate, observable, action } from 'mobx';
import { observer } from 'mobx-react';

// 데코레이션을 사용 하지 않는다면..
class NoDecorator extends Component {

    seq = 0;

    seqIncrease = ()=>{
        this.seq++;
    }

    render() {
        return (
            <div>
                <h1>{this.seq}</h1>
                <div>NoDecorator</div>
                <button onClick={this.seqIncrease}>+1</button>
            </div>
        )
    }
}

// observable, action, computed 선언
decorate(NoDecorator,{
    seq: observable,
    seqIncrease: action
})

// 컴포넌트 observer 선언
export default observer(NoDecorator);

// // 데코레이션을 사용 한다면..
// @observer
// class NoDecorator extends Component {

//     @observable seq = 0;

//     @action
//     seqIncrease = ()=>{
//         this.seq++;
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.seq}</h1>
//                 <div>NoDecorator</div>
//                 <button onClick={this.seqIncrease}>+1</button>
//             </div>
//         )
//     }
// }

// export default NoDecorator;