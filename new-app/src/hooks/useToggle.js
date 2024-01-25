import { useState } from "react";

export function useToggle() {
  const [toggle, setToggle] = useState(false);
  const controlToggle = () => {
    setToggle(!toggle);
  };
  return [toggle, controlToggle];
}
