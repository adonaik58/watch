import { useEffect, useState } from "react";
import "./App.css";

function App() {
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
        .concat(", ", String(new Date().getHours()), ":", String(new Date().getMinutes()), ", ", String(new Date().getSeconds() < 10 ? "0" + new Date().getSeconds() : new Date().getSeconds()))
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
