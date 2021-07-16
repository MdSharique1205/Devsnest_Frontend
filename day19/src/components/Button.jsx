import { useState } from "react";
export default function Button() {
  const [count, setcount] = useState(0);

  return <button onClick={() => setcount(count + 1)}>{count}</button>;
}
