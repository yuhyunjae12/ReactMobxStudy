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

    // async는 비동기 통신일 때 사용
    getTitleInfo = async () => {

      // api 호출 부를 service/api에 선언 해두고 호출
      const info = await Promise.all([
        service.getTitle()
      ]);

      // localStorage에 title정보 저장
      localStorage.setItem('Token',info[0].data.title);

    }

    render() {
        const { number, increase, decrease } = this.props;
        return (
            <div>
                <div>{number}</div>
                <button onClick={increase}>+1</button>
                <button onClick={decrease}>-1</button>
                <button onClick={this.getTitleInfo}>test</button>
            </div>
        )
    }
}

export default Counter;