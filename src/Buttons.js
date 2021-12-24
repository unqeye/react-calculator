import React from "react";
import Button from "./Button";

function Buttons(props) {
  return (
    <>
      <div>
        <Button val="Clear History" onClick={props.onClick} />
        <Button val="CE" onClick={props.onClick} />
      </div>
      <div>
        <Button val="7" onClick={props.onClick} />
        <Button val="8" onClick={props.onClick} />
        <Button val="9" onClick={props.onClick} />
        <Button val="/" onClick={props.onClick} />
      </div>
      <div>
        <Button val="4" onClick={props.onClick} />
        <Button val="5" onClick={props.onClick} />
        <Button val="6" onClick={props.onClick} />
        <Button val="*" onClick={props.onClick} />
      </div>
      <div>
        <Button val="1" onClick={props.onClick} />
        <Button val="2" onClick={props.onClick} />
        <Button val="3" onClick={props.onClick} />
        <Button val="-" onClick={props.onClick} />
      </div>
      <div>
        <Button val="0" onClick={props.onClick} />
        <Button val="." onClick={props.onClick} />
        <Button val="=" onClick={props.onClick} />
        <Button val="+" onClick={props.onClick} />
      </div>
    </>
  );
}

export default Buttons;
