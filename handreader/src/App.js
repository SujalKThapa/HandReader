import './App.css';
import SimpleButton from './components/button';
import DialogBox from './components/dialog';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div className='dialogBox'>
          Enter text to be checked for Personally Identifiable Information (PII)
          <DialogBox></DialogBox>
          <SimpleButton text="Submit"></SimpleButton>
        </div>
      </header>
    </div>
  );
}

export default App;
