import React, { useState } from "react";
import Expression from "./Expression";
import History from "./History";
import Buttons from "./Buttons";

function App() {
  const [token, setToken] = useState("0");
  const [current, setCurrent] = useState([]);
  const [history, setHistory] = useState(() => {
    if (!window.localStorage.getItem("history")) {
      window.localStorage.setItem("history", "[]");
    }
    return JSON.parse(window.localStorage.getItem("history"));
  });

  const onClickButton = (val) => {
    const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const op = ["+", "-", "*", "/"];

    if (num.includes(val)) {
      if (token === "0") {
        setToken(val);
      } else {
        setToken(token + val);
      }
    } else if (op.includes(val)) {
      if (token === "") {
        setCurrent(current.slice(0, current.length - 1).concat(val));
      } else {
        setCurrent(current.concat(token).concat(val));
        setToken("");
      }
    } else if (val === ".") {
      if (!token.includes(".")) {
        setToken(token + val);
      }
    } else if (val === "CE") {
      if (token.length > 1) {
        setToken(token.substring(0, token.length - 1));
      } else {
        setToken("0");
      }
    } else if (val === "=") {
      if (token !== "") {
        const newCurrent = current.concat(token);
        let result = parseFloat(newCurrent[0]);
        if (newCurrent.length > 1) {
          for (let i = 1; i < newCurrent.length; i += 2) {
            const op = newCurrent[i];
            const num = parseFloat(newCurrent[i + 1]);
            if (op === "+") {
              result += num;
            } else if (op === "-") {
              result -= num;
            } else if (op === "*") {
              result *= num;
            } else if (op === "/") {
              result /= num;
            }
          }
        }
        const newHistory = history.concat([
          { exp: newCurrent, result: result },
        ]);
        window.localStorage.setItem("history", JSON.stringify(newHistory));
        setHistory(JSON.parse(window.localStorage.getItem("history")));
        setToken("0");
        setCurrent([]);
      }
    } else if (val === "Clear History") {
      window.localStorage.setItem("history", "[]");
      setHistory(JSON.parse(window.localStorage.getItem("history")));
    }
  };

  const onClickHistory = (exp) => {
    setCurrent(exp.slice(0, exp.length - 1));
    setToken(exp[exp.length - 1]);
  };

  return (
    <>
      <h3>
        History
        <History history={history} onClick={onClickHistory} />
      </h3>
      <h1>
        <Expression current={current} token={token} />
      </h1>
      <Buttons onClick={onClickButton} />
    </>
  );
}

export default App;
