import logo from './logo.svg';
import './App.css';
import CardScreen from './screens/CardScreen';

function App() {
  return (
    <div className="App" style={{
      height: '100vh',
      width: '100vw',
      position: 'absolute',
      left: 0,
      display: 'flex',
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center'
    }}>

      <CardScreen />
    </div>
  );
}

export default App;
