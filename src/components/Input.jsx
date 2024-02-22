import { useState } from "react";
import "./Input.css";

export default function Input({ onClickHandler }) {
  const [userIp, setUserIp] = useState("");
  function onChangeHandler(e) {
    setUserIp(e.target.value);
  }

  function inputResetHandler() {
    setUserIp("");
  }

  return (
    <section className="ip">
      {/* <input type="text" value={userIp} onChange={onChangeHandler} /> */}
      <textarea
        rows="4"
        cols="50"
        placeholder="Just pour your heart out..."
        value={userIp}
        onChange={onChangeHandler}
      ></textarea>
      <button
        onClick={() => {
          onClickHandler(userIp);
          inputResetHandler();
        }}
      >
        +
      </button>
    </section>
  );
}
