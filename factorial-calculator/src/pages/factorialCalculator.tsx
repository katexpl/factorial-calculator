import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoBackArrow from "../components/backArrow";
import { State } from "../models/models";

const FactorialCalculator: React.FC = () => {
  const dispatch = useDispatch();
  const { input, result, history } = useSelector((state: State) => state);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = parseInt(e.target.value);
    const action = {
      type: "UPDATE_INPUT",
      payload: input,
    };
    dispatch(action);
  };

  const factorial = (n: number): number => {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  };

  const handleCalculateClick = () => {
    const res = factorial(input);
    const action = {
      type: "UPDATE_RESULT",
      payload: res,
    };
    dispatch(action);

    const newHistory = [...history, res];
    const historyAction = {
      type: "UPDATE_HISTORY",
      payload: newHistory,
    };
    dispatch(historyAction);
  };

  const clearHistory = () => {
    const action = {
      type: "UPDATE_HISTORY",
      payload: [],
    };
    dispatch(action);
  };

  return (
    <>
      <GoBackArrow />
      <div className="factorial-content-container">
        <input type="number" value={input} onChange={handleInputChange} />
        <button onClick={handleCalculateClick}>Calculate Factorial</button>
        <div>Result: {result}</div>
        <div>History: {history.join(", ")}</div>

        {history.length !== 0 && (
          <button onClick={() => clearHistory()} className="danger-btn">
            Clear history
          </button>
        )}
      </div>
    </>
  );
};

export default FactorialCalculator;
