import React, { useEffect, useState } from "react";

function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);

    if (!isNaN(value)) {
      setNumbers([...numbers, value]);
    }
  };

  useEffect(() => {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    setSum(total);
  }, [numbers]);

  return (
    <form>
      <h1>Sum Calculator</h1>

      <input type="number" id="number" onChange={handleChange} />

      <p>Sum: {sum}</p>
    </form>
  );
}

export default SumCalculator;
