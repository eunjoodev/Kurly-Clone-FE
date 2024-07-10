import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>프론트엔드 1차 프로젝트 팀 반갑습니다🤓 3차까지 화이팅입니다.</div>
        <div>푸쉬 연습!!</div>
        <div>왜 푸쉬가 안돼지?</div>
      </header>
    </div>
  );
}

export default App;
