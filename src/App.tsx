import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const hour = String(new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours());
  const minute = String(new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes());
  const second = String(new Date().getSeconds() < 10 ? "0" + new Date().getSeconds() : new Date().getSeconds());
  const date = () =>
    String(
      new Date(new Date().toDateString())
        .toLocaleDateString("pt-PT", {
          // weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          // timeStyle: "full",
        })
        .concat(", ", hour, ":", minute, ", ", second)
    );
  const [dateTime, setDateTime] = useState(date);
  useEffect(() => {
    setInterval(() => {
      setDateTime(date);
    }, 500);
  }, [dateTime]);
  return (
    <div className="content">
      <div className="container">
        <div className="shadow"></div>
        <h3>{dateTime.split(",")[0]}</h3>
        <h1>{dateTime.split(",")[1]}</h1>
        <p>{dateTime.split(",")[2]}</p>
      </div>
    </div>
  );
}

export default App;
