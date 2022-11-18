import React from "react";
import './InspoQuote.css';

/**
 *  Function renders inspiration quote section (text + button for new quote)
 *
 *  Props
 *  - handleClick()
 *  - inspo quote text
 *  - btnMessage
 *
 *  App --> InspoQuote
 */
function InspoQuote({handleClick, message}) {
  console.log("InspoQuote rendered with props", handleClick, message);
  const btnMessage = message === ""
    ? "Click here for inspirational quote!"
    : "Nu quote"

  return (
    <div className="InspoQuote">
      <p className="InspoQuote-text">{message}</p>
      <button className="InspoQuote-button" onClick={handleClick}>{btnMessage}</button>
    </div>
  )
}

export default InspoQuote
