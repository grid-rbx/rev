import rev from "@grid-rbx/rev";
import Form from "./Form";

const randomWords = rev.generateRandomWords();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rev Demo</h1>
        <p>
          This is a demo for the Rev library. You can take the words <br />{" "}
          below, put them in your Roblox description, then insert your Roblox ID{" "}
          <br /> into the textbox below then press on the button labeled 'Check'
          and it will tell you if <br /> the code was found on your profile!
        </p>
        <p>
          <i>Reload the page to get a new code.</i>
        </p>
        <p>
          <code>{randomWords}</code>
        </p>
        <Form code={randomWords} />
      </header>
    </div>
  );
}

export default App;
