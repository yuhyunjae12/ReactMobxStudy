import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import * as service from './../service/api';

// inject('스토어 이름')을 하시면 컴포넌트에서 해당 스토어를 props로 전달 받아 사용 할 수 있습니다.
// @inject('counter')
// 함수 형태로 파라미터를 전달해주면 특정 값만 받아올 수 있습니다.
@inject(stores => ({
    number: stores.counter.number,
    increase: stores.counter.increase,
    decrease: stores.counter.decrease,
}))
@observer
class Counter extends Component {

    getTitleInfo = async () => {

      const info = await Promise.all([
        service.getTitle()
      ]);

      console.log(info[0].data.title);
      localStorage.setItem('Token',info[0].data.title);

    }

    render() {
        //const { counter } =this.props;
        const { number, increase, decrease } = this.props;
        return (
            <div>
                {/* <div>{counter.number}</div>
                <button onClick={counter.increase}>+1</button>
                <button onClick={counter.decrease}>-1</button> */}
                <div>{number}</div>
                <button onClick={increase}>+1</button>
                <button onClick={decrease}>-1</button>
                <button onClick={this.getTitleInfo}>test</button>
            </div>
        )
    }
}

export default Counter;