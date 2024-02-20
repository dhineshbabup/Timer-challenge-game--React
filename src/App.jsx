import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title='Easy' timer={1} />
        <TimerChallenge title='Medium' timer={5} />
      </div>
    </>
  );
}

export default App;
