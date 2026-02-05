import React, { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-box">
        <h1>Lets Count</h1>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Home;
