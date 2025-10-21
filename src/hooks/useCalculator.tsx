import { useState } from "react";

export default function useCalculator() {
  const [result, setResult] = useState<number>(0);

  const add = (a: number, b: number) => setResult(a + b);
  const subtract = (a: number, b: number) => setResult(a - b);
  const multiply = (a: number, b: number) => setResult(a * b);
  const divide = (a: number, b: number) => setResult(b === 0 ? NaN : a / b);
  const power = (a: number, b: number) => {
    let res = 1;
    for (let i = 0; i < b; i++) res *= a;
    setResult(res);
  };
  const clear = () => setResult(0);

  return { result, add, subtract, multiply, divide, power, clear };
}
