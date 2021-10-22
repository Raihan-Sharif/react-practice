import Clock from "./Components/Clock";
import Clock2 from "./Components/Clock2";
import Clock3 from "./Components/Clock3";
import Clock4 from "./Components/ReRenderExample/Clock4";

function App() {
  return (
    <div>
        <Clock locale="bn-BD"></Clock>
        <Clock2 locale="en-US"></Clock2>
        <Clock3 locale="bn-BD"></Clock3>
        <Clock4 locale="bn-BD"></Clock4>
    </div>
  );
}

export default App;
