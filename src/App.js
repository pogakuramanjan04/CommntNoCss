import "./styles.css";
import { useState } from "react";
let n;
let d;
export default function App() {
  const [o, uo] = useState([{ name: "", comment: "" }]);
  function c(e) {
    n = event.target.value;
  }
  function r(e) {
    d = event.target.value;
  }
  function s() {
    const ud = function () {
      console.log(n, d);
      return [...o, { name: n, comment: d }];
    };
    uo(ud);
  }

  return (
    <div className="App">
      <h1>comments</h1>
      <input type="text" onChange={c} />
      <br />
      <br />
      <input type="text" onChange={r} />
      <br />
      <br />
      <button onClick={s}>submit</button>

      {o.map((orr, index) => (
        <>
          <li key={index}>
            {orr.name}
            <p>{orr.comment}</p>
          </li>
        </>
      ))}
    </div>
  );
}
