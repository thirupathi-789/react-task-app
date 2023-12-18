import {useState} from 'react';

const CounterComponent = () => {

    const [counter, setCounter] = useState(0)

    const onClickHandle = () => {
        setCounter(counter + 1);
    }

    return(
        <div style={{textAlign: "center"}}>
            <button style={{marginRight: "14px"}} onClick={onClickHandle}>Click</button>
            <span>{counter} Counter = {counter}</span>
        </div>
    )
}

export default CounterComponent;