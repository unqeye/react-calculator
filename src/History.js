import React from "react";

function History(props) {
  const history = props.history.map((element, key) => {
    return (
      <div key={key + "div"}>
        <button key={key + "exp"} onClick={() => props.onClick(element.exp)}>
          {element.exp}
        </button>
        <span key={key + "span"}>=</span>
        <button
          key={key + "result"}
          onClick={() => props.onClick([element.result])}
        >
          {element.result}
        </button>
      </div>
    );
  });

  return <div>{history}</div>;
}

export default History;
