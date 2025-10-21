import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";
import useCalculator from "../hooks/useCalculator";
import { useState } from "react";

export default function Projects() {
  const { result, add, subtract, multiply, divide, power, clear } = useCalculator();
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);

  return (
    <div id="page-wrapper">
      <Header />
      <div id="container">
        <Nav />
        <Main>
          <h1>Big Calculator Down Below</h1>
          <label>Give me a number </label>
          <input type="number" onChange={e => setA(Number(e.target.value))} />
          <label>Give me another number </label>
          <input type="number" onChange={e => setB(Number(e.target.value))} />
          <div>
            <button onClick={() => add(a, b)}>+</button>
            <button onClick={() => subtract(a, b)}>-</button>
            <button onClick={() => multiply(a, b)}>*</button>
            <button onClick={() => divide(a, b)}>/</button>
            <button onClick={() => power(a, b)}>^</button>
            <button onClick={clear}>Clear</button>
          </div>
          <h3>Result: {result}</h3>
        </Main>
      </div>
      <Footer />
    </div>
  );
}
