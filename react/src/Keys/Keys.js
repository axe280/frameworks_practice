import React from 'react';

export function Keys(props) {
  const listItems = props.numbers.map((number, index) => 
    <li key={number.toString() + index}>
      {number}
    </li>
  );

  return(
    <ul>{listItems}</ul>
  );
};