import "./App.css";
import CardScreen from "./screens/CardScreen";

function App() {
  return (
    <div
      className="App"
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        left: 0,
        top: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardScreen />
    </div>
  );
}

export default App;
