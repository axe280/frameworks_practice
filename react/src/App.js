import React from 'react';
import { CounterClass } from './counters/class.js';
import { CounterFunc } from './counters/function.js';
import { Clock } from './ClockDoc/Clock.js';
import { Toggle } from './Toggle/Toggle.js';
import { Keys } from './Keys/Keys.js';

const App = () => {
  return (
    <div className="wrapper">
      <CounterFunc  min={1} max={50} />
      <CounterClass min={1} max={50} />
      {/* <Clock /> */}
      {/* <Toggle /> */}
      {/* <Keys numbers={[1, 3, 5, 1, 4]} /> */}
    </div>
  );
};

export default App;