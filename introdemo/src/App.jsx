import { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>Press buttons to start using the app.</div>;
  }
  return <div>Button press history: {props.allClicks.join(" ")}</div>;
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClicks = () => {
    setAll(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  };

  const handleRightClicks = () => {
    setAll(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(left + updatedRight);
  };

  return (
    <div>
      <Button onClick={handleLeftClicks} text={"Left"} />
      <Button onClick={handleRightClicks} text={"Right"} />
      <History allClicks={allClicks} />
      <p>Total: {total}</p>
    </div>
  );
};
export default App;
