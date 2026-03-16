import React from "react";
import { useEffect, useState } from "react";

function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);

    if (!isNaN(value)) {
      setNumbers([...numbers, value]);
    }

    e.target.value = "";
  };

  useEffect(() => {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    setSum(total);
  }, [numbers]);

  return (
    <>
      <form>
        <h1>Sum Calculator</h1>

        <input
          type="number"
          name="number"
          id="number"
          onChange={handleChange}
        />

        <p>Sum: {sum}</p>
      </form>
    </>
  );
}

export default SumCalculator;
