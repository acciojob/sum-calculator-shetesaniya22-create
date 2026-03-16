import React, { useEffect, useState } from "react";

function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const num = parseInt(value);

      if (!isNaN(num)) {
        setNumbers([...numbers, num]);
      }

      setValue("");
    }
  };

  useEffect(() => {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    setSum(total);
  }, [numbers]);

  return (
    <form>
      <h1>Sum Calculator</h1>

      <input
        type="number"
        id="number"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <p>Sum: {sum}</p>
    </form>
  );
}

export default SumCalculator;
