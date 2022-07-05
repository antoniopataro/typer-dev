import React, { useState } from "react";
import FeedbackStyles from "./styles";

function Feedback() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  function handleCopyEmail() {
    setCopiedEmail(true);
    navigator.clipboard.writeText("antoniopatarodev@gmail.com");
  }

  return (
    <FeedbackStyles id="feedback">
      <header>
        <div className="title">
          <h4 className="title-indicator">Feedback</h4>
          <h1>Give me your opinion!</h1>
        </div>
        <h4>
          I wanna know your thoghts on what I’ve created here.
          <br />
          <br />
          Design, features, performance, issues you might be facing... really anything.
        </h4>
      </header>

      <div id="email">
        <span style={copiedEmail ? { color: "var(--primary)" } : { color: "var(--text)" }}>
          antoniopatarodev@gmail.com
        </span>
        <button onClick={handleCopyEmail}>Copy E-mail</button>
      </div>
    </FeedbackStyles>
  );
}

export default Feedback;
