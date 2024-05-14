import { useReducer } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const initialState = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  result: "",
  loading: false,
};

function reducer(state, action) {}

function App() {
  const [state, dispathc] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>Google Translate</h1>
    </div>
  );
}

export default App;
