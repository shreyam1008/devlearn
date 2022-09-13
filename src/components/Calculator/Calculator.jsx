import React, { useEffect, useState } from "react";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");

  const calculatorValues = [
    ["9", "+", "-", "/"],
    ["6", "7", "8", "*"],
    ["3", "4", "5", "C"],
    ["0", "1", "2", "="],
  ];

  const operation = (a1, b1, op) => {
    const a = Number(a1);
    const b = Number(b1);
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        return NaN;
    }
  };
  const calculation = (expression) => {
    const exp = expression.slice(1, expression.length) + "X";

    // eg "11+55/77-8X"
    let tempStack = "";
    let numberStack = "7.33";
    let operatorStack = "X";
    for (let i = 0; i < exp.length + 1; i++) {
      if (operatorStack.length === 2) {
        numberStack = operation(numberStack, tempStack, operatorStack[0]);
        tempStack = "";
        operatorStack = operatorStack.slice(1, operatorStack.length);
      }

      if (!isNaN(exp[i])) {
        if (operatorStack.length === 0) {
          numberStack = numberStack + exp[i];
        } else {
          tempStack = tempStack + exp[i];
        }
      } else {
        operatorStack = operatorStack + exp[i];
      }
    }
    return numberStack;
  };
  // 14-6
  const handleCalculation = (value) => {
    switch (value) {
      case "C":
        setDisplayValue("0");
        break;
      case "=":
        setDisplayValue(calculation(displayValue));
        break;
      default:
        // Numbers or expression
        setDisplayValue((prev) => prev + value);
        break;
    }
  };
  const findClassValue = (value) => {
    if (value === "=") return "equals";
    if (value === "*" || value === "+" || value === "-" || value === "/")
      return "operator";
    if (value === "C") return "clear";
    return "numbers";
  };

  return (
    <div className="calculator">
      <div className="output_screen">{displayValue}</div>
      {calculatorValues.map((singleRow, index) => (
        <div className="single_row" key={index}>
          {singleRow.map((value) => (
            <div
              className={`single_value ${findClassValue(value)}`}
              key={value}
              onClick={() => handleCalculation(value)}
            >
              {value}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calculator;
