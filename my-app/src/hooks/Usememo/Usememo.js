import React, { useMemo, useState } from 'react';

function ExpensiveComponent({ number }) {
  
  const factorial = (n) => {
    console.log('Calculating factorial...');
    if (n < 0) return undefined;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  // Memoize the factorial computation
  const factorialValue = useMemo(() => factorial(number), [number]);

  return (
    <div>
      <p>Factorial of {number} is {factorialValue}</p>
    </div>
  );
}

function Usememo() {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value, ))}
      />
      <ExpensiveComponent number={number} />
    </div>
  );
}

export default Usememo;