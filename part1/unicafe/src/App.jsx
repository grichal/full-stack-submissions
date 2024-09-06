import { useState } from "react";
import statisticLine from "./statisticLine";
import StatisticLine from "./statisticLine";
import FunctionButton from "./functionButton";

const Statistics = (props) => {
  const { good, neutral, bad, avr, possitive } = props;
  return (
    <>
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good + neutral + bad}</p>
        <p>average {avr}</p>
        <p>possitive {possitive}%</p>
      </div>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const avr = total === 0 ? 0 : (good - bad) / total;
  const possitive = (good / total) * 100;
  return (
    <>
      <div>
        <h1>give feedback</h1>
        <FunctionButton value={good} setter={setGood} text="good" />
        <FunctionButton value={neutral} setter={setNeutral} text="neutral" />
        <FunctionButton value={bad} setter={setBad} text="bad" />
      </div>
      <br />
      <h1>statistics</h1>
      {total === 0 ? (
        <p>no feedback given</p>
      ) : (
        <>
          <table>
            <tbody>
              <StatisticLine text="good" value={good} />
              <StatisticLine text="neutral" value={neutral} />
              <StatisticLine text="bad" value={bad} />
              <StatisticLine text="all" value={total} />
              <StatisticLine text="average" value={avr} />
              <StatisticLine text="possitive" value={possitive + "%"} />
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default App;
