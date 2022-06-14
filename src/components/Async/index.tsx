import { useEffect, useState } from "react";

export function Async() {
  const [button, setButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setButton(true);
    }, 2000);
  }, []);

  return (
    <main>
      <h1>Hello Word</h1>
      {button && <button>button async</button>}
    </main>
  );
}
