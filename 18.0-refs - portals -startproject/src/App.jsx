import Header from "./components/Header";
import Player from "./components/Player";
import TimeStopper from "./components/TimeStopper";
function App() {
  return (
    <>
      <Header />
      <Player />
      <div id="challenges">
        <TimeStopper title="LEVER 1" target={1} />
        <TimeStopper title="LEVER 2" target={5} />
        <TimeStopper title="LEVER 3" target={10} />
        <TimeStopper title="LEVER 4" target={15} />
      </div>
    </>
  );
}

export default App;
