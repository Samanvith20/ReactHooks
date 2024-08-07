import React, { useMemo, useState } from 'react';

function ExpensiveComponent({ number }) {
  console.log('ExpensiveComponent rendered');

  const factorial = (n) => {
    console.log('Calculating factorial...');
    if (n < 0) return undefined;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  const factorialValue = useMemo(() => {
    console.log('useMemo callback executed');
    return factorial(number);
  }, [number]);

  return (
    <div>
      <p>Factorial of {number} is {factorialValue}</p>
    </div>
  );
}

function Usememo() {
  const [number, setNumber] = useState(1);
  const [, setToggle] = useState(false);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value, 10))}
      />
      <button onClick={() => setToggle(prev => !prev)}>
        Toggle (to cause re-render)
      </button>
      <ExpensiveComponent number={number} />
    </div>
  );
}

export default Usememo;