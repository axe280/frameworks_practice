import React, {useState} from 'react';

export const CounterFunc = (props) => {
  const [value, setValue] = useState(1);
  
  const increase = () => {
    if (value < props.max) {
      setValue(value + 1);
    }
  };

  const decrease = () => {
    if (value > props.min) {
      setValue(value - 1);
    }
  };

  const changeHandler = (event) => {
    let val = Number(event.target.value);

    if (isNaN(val)) {
      return;
    }
    
    if (val > props.max)  {
      val = props.max;
    }

    if (val < props.min)  {
      val = props.min;
    }

    setValue(val);
  };
  
  return (
    <div>
      <button type="button" onClick={decrease}>-</button>
      <input type="text" value={value} onChange={changeHandler}/>
      <button type="button" onClick={increase}>+</button>
    </div>
  );
};